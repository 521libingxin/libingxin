import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationService } from '../../service/navigation.service';

@Component({
  moduleId: module.id,
  selector: 'menus',
  templateUrl: './wizards.component.html'
})
export class WizardsComponent implements OnInit, OnDestroy {
    destroy: any;
    setWizardsModal = false;
    wizardChild: string;
    wizardList: Object = {
        'upgradeWizard': 'Upgrade wizard',
        'inkPrimingWizard': 'Ink priming wizard',
        'inkFlushingWizard': 'Ink flushing wizard',
        'nozzleUnblockingWizard': 'Nozzle unblocking wizard',
        'installationWizard': 'Installation wizard',
        'printHeightCalibrationWizard': 'Print height calibration wizard'
    };
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private navservice: NavigationService
    ) { }
    ngOnInit() {
       this.navservice.sendPathInfo(this.router.url.split('/'));
       this.destroy = this.navservice.pageOpened$.subscribe(
        (list) => {
          this.wizardChild = this.wizardList[list.pop()];
        });
    }
    open() {
        this.setWizardsModal = true;
    }
    close() {
        this.setWizardsModal = false;
    }
    ngOnDestroy() {
        this.destroy.unsubscribe();
    }
    go(i: any) {
        if (i === '') {return false; }
        this.router.navigate([i]);
    }

}