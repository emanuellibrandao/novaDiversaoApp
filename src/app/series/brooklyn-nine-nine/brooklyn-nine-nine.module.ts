import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrooklynNineNinePageRoutingModule } from './brooklyn-nine-nine-routing.module';

import { BrooklynNineNinePage } from './brooklyn-nine-nine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrooklynNineNinePageRoutingModule
  ],
  declarations: [BrooklynNineNinePage]
})
export class BrooklynNineNinePageModule {}
