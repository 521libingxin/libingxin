
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../../service/navigation.service';

@Component({
  moduleId: module.id,
  selector: 'app-inkFlushingWizard',
  templateUrl: './inkFlushingWizard.component.html',
  styleUrls: ['./inkFlushingWizard.component.css']
})
export class InkFlushingWizardComponent implements OnInit {
  selectPage = -1;
  selectPictureList = [
    {
      'caption': 'Minimal flush:Future inks will be similar to existing',
      'pictureList': [
        {
          'caption': 'Access printer',
          'picture': '01_access_prt.png'
        },
        {
          'caption': 'Prepare machine for flushing',
          'picture': '02_prep_flush.png'
        },
        {
          'caption': 'Flush low drip valves externally',
          'picture': '03_flush_ldv.png'
        },
        {
          'caption': 'Fit flushing rig assembly',
          'picture': '04_fit_rig_asm.png'
        },
        {
          'caption': 'Secure both locking clamps securing in the horizontal position',
          'picture': '05_sec_clamps.png'
        },
        {
          'caption': 'Connect empty makeup cartridge to waste',
          'picture': '06_mu_waste.png'
        },
        {
          'caption': 'Rinse print head gutter area',
          'picture': '07_rinse_ph_gtr.png'
        },
        {
          'caption': 'File empty ink cartridge with flush A and attach to print head gutter pipe',
          'picture': '08_fill_flush_A.png'
        },
        {
          'caption': '...',
          'picture': '09_flush_complete.png'
        },
        {
          'caption': '...',
          'picture': '10_rem_waste.png'
        },
        {
          'caption': '...',
          'picture': '11_rinse_ldv.png'
        },
        {
          'caption': '...',
          'picture': '12_ready.png'
        }
      ]
    },
    {
      'caption': 'Inks of different colour and different base',
      'pictureList': [
        {
          'caption': '04_fit_rig_asm',
          'picture': '04_fit_rig_asm.png'
        },
        {
          'caption': '05_sec_clamps',
          'picture': '05_sec_clamps.png'
        }
      ]
    },
    {
      'caption': 'Inks of different colour and different base (sensitive inks)',
      'pictureList': [
        {
          'caption': '03_flush_ldv',
          'picture': '03_flush_ldv.png'
        },
        {
          'caption': '04_fit_rig_asm',
          'picture': '04_fit_rig_asm.png'
        },
        {
          'caption': '05_sec_clamps',
          'picture': '05_sec_clamps.png'
        }
      ]
    }
  ];
  constructor(
        private router: Router,
        private navservice: NavigationService
  ) { }

  ngOnInit() {
    this.navservice.sendPathInfo(this.router.url.split('/'));
  }

  openSelectPage (index: number) {
    this.selectPage = index;
  }
  selectback () {
    this.selectPage = -1;
  }

}