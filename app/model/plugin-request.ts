// Not auto generated feel free to modify
export let setElementPosition = { type: 'pluginCommand', destination: 'example', id: 1,
inParams: { xPos: <number>undefined, yPos: <number>undefined, elementName: <string>undefined },
outParams: {} };

export let loadFile = { type: 'pluginCommand', destination: 'example', id: 2,
inParams: { contentLocation: <string>undefined, contentName: <string>undefined },
outParams: { label: <string>undefined } };

export let setStringContent = { type: 'pluginCommand', destination: 'example', id: 3,
inParams: { contentId: <string>undefined, contentString: <string>undefined,
            isDate: <boolean>undefined, dateString: <string>undefined },
outParams: {} };

export let getElementrenderByName = { type: 'pluginCommand', destination: 'example', id: 4,
inParams: { elementName: <string>undefined },
outParams: { elementName: <string>undefined, width: <number>undefined, height: <number>undefined, image: <string>undefined } };

export let insertNewElement = { type: 'pluginCommand', destination: 'example', id: 5,
inParams: { elementName: <string>undefined, contentID: <string>undefined, contentID2: <string>undefined,
            contentString: <string>undefined, isDate: <boolean>undefined },
outParams: {} };

export let setElementFont = { type: 'pluginCommand', destination: 'example', id: 6,
inParams: { elementName: <string>undefined, font: <string>undefined },
outParams: {} };

export let getLabelPreview = { type: 'pluginCommand', destination: 'example', id: 7,
inParams: { contentLocation: <string>undefined, contentName: <string>undefined },
outParams: { contentName: <string>undefined, contentLocation: <string>undefined,
             width: <number>undefined, height: <number>undefined, image: <string>undefined } };

export let setLabelMonitor = { type: 'pluginCommand', destination: 'example', id: 8,
inParams: { contentLocation: <string>undefined, contentName: <string>undefined },
outParams: {} };

export let getLabelMonitor = { type: 'pluginCommand', destination: 'example', id: 9,
inParams: {},
outParams: { contentLocation: <string>undefined, contentName: <string>undefined,
             width: <number>undefined, height: <number>undefined, image: <string>undefined } };
// TODO demo fcn only
export let setDateStringContent = { type: 'pluginCommand', destination: 'example', id: 10,
inParams: { contentId: <string>undefined, dateString: <string>undefined },
outParams: {} };
