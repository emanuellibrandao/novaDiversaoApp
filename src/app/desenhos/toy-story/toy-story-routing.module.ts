import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToyStoryPage } from './toy-story.page';

const routes: Routes = [
  {
    path: '',
    component: ToyStoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToyStoryPageRoutingModule {}
