import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class IntercommService {
  private baseUrl = '/';  // URL to web API
  constructor(private http: Http) {}

  // This function will construct a remote procedure call using a function definition object. 
  // If fcn.type is defined serverside, server will do its best to hand it off to the designated recipient
  remoteProcedureCall(fcn: any, inParams: any): Observable<Object> {
    fcn.inParams = inParams;
    let body = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><' + fcn.type + ' xmlns="urn:printerservice">' + JSON.stringify(fcn) + '</' + fcn.type + '></soap:Body></soap:Envelope>';
    let headers = new Headers({ 'Content-Type': 'application/soap+xml; charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl, body, options)
      .map(this.extractSoapResponse)
      .catch(this.handleError);
  }

  // This function will add an IC function definition object to a list kept by the server to be regularly polled. 
  // The results are kept in a buffer and sent to frontend with longpoll responses
  manageActivePolling(fcn: any, inParams: any, enable: boolean): Observable<Object> {
    fcn.inParams = inParams;
    fcn.enable = enable;
    let body = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><subscribeActivePoll xmlns="urn:printerservice">' + JSON.stringify(fcn) + '</subscribeActivePoll></soap:Body></soap:Envelope>';
    let headers = new Headers({ 'Content-Type': 'application/soap+xml; charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl, body, options)
      .map(this.extractSoapResponse)
      .catch(this.handleError);
  }

  // This function will order the server to subscribe to a printer event. 
  // The pushed data are kept in a buffer and sent to frontend with longpoll responses
  manageEvent(id: any, enable: boolean, bufferModeStatic: boolean = true): Observable<Object> {
    let body = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><subscribeEvent xmlns="urn:printerservice"> {"eventId":' + id + ',"enable":' + enable + ',"bufferModeStatic":' + bufferModeStatic + '} </subscribeEvent></soap:Body></soap:Envelope>';
    let headers = new Headers({ 'Content-Type': 'application/soap+xml; charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl, body, options)
      .map(this.extractSoapResponse)
      .catch(this.handleError);
  }

  // This function will ask the server for updates. First call immediately returns a set of values, 
  // subsequent calls will either return fresh data on change detection OR 
  // return stale data on serverside request timeout (currently about 4 sec.).
  longpolling(): Observable<Object> {
    let body = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><longPolling xmlns="urn:printerservice">{}</longPolling></soap:Body></soap:Envelope>';
    let headers = new Headers({ 'Content-Type': 'application/soap+xml; charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl, body, options)
      .map(this.extractSoapResponse)
      .catch(this.handleError);
  }

  // helper functions ==============================================================================================================

  private extractSoapResponse(resp: Response): Object {
    let translate = { 'nbsp': ' ', 'amp': '&', 'quot': '\"', 'lt': '<', 'gt': '>' };
    let body: string = resp.text();
    body = body.substring(body.indexOf('<json>') + 6)
    body = body.substring(0, body.indexOf('</json>'));
    body = body.replace(/&(nbsp|amp|quot|lt|gt);/g, function (match, entity) { return translate[entity]; })
    // TODO there should be various safety checks
    return JSON.parse(body)
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}