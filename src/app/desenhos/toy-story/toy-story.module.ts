import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToyStoryPageRoutingModule } from './toy-story-routing.module';

import { ToyStoryPage } from './toy-story.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToyStoryPageRoutingModule
  ],
  declarations: [ToyStoryPage]
})
export class ToyStoryPageModule {}
