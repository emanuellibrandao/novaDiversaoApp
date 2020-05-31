import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'ad-astra',
    loadChildren: () => import('./filmes/ad-astra/ad-astra.module').then( m => m.AdAstraPageModule)
  },
  {
    path: 'resgate',
    loadChildren: () => import('./filmes/resgate/resgate.module').then( m => m.ResgatePageModule)
  },
  {
    path: 'the100',
    loadChildren: () => import('./series/the100/the100.module').then( m => m.The100PageModule)
  },
  {
    path: 'brooklyn-nine-nine',
    loadChildren: () => import('./series/brooklyn-nine-nine/brooklyn-nine-nine.module').then( m => m.BrooklynNineNinePageModule)
  },
  {
    path: 'toy-story',
    loadChildren: () => import('./desenhos/toy-story/toy-story.module').then( m => m.ToyStoryPageModule)
  },
  {
    path: 'carros',
    loadChildren: () => import('./desenhos/carros/carros.module').then( m => m.CarrosPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
