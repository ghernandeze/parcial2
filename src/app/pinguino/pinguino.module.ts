import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinguinoComponent } from './pinguino.component';
import { PinguinoDetailComponent } from './pinguino-detail/pinguino-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PinguinoComponent, PinguinoDetailComponent],
  exports: [PinguinoComponent]
})
export class PinguinoModule { }
