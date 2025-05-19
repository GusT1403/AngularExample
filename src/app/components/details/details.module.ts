import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    DetailsComponent,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: DetailsComponent }])
  ]
})
export class DetailsModule {}