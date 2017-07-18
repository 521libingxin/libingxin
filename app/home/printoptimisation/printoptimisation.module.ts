
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { PrintoptimisationRoutingModule } from './printoptimisation-routing.module';
import { PrintoptimisationComponent } from './printoptimisation.component';
import { SharedModule }        from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule, PrintoptimisationRoutingModule, SharedModule, FormsModule
  ],
  declarations: [PrintoptimisationComponent]
})
export class PrintoptimisationModule { }