import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpperCaseOnePipe } from './upper-case-one.pipe';

@NgModule({
  declarations: [
    UpperCaseOnePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UpperCaseOnePipe,
  ]
})
export class PipesModule { }
