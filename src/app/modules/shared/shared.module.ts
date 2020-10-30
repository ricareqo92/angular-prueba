import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  declarations: [
    TitleComponent,
    ModalDeleteComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
  ],
  exports: [
    TitleComponent,
    ModalDeleteComponent,
  ],
})
export class SharedModule { }
