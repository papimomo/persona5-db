import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'persona-info/:name', loadChildren: './persona-info/persona-info.module#PersonaInfoPageModule' },
  { path: 'fusion-list/:name', loadChildren: './fusion-list/fusion-list.module#FusionListPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
