import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrooklynNineNinePage } from './brooklyn-nine-nine.page';

const routes: Routes = [
  {
    path: '',
    component: BrooklynNineNinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrooklynNineNinePageRoutingModule {}
