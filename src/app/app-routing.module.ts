import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'persona-info/:name', loadChildren: './pages/persona-info/persona-info.module#PersonaInfoPageModule' },
  { path: 'fusion-list/:name', loadChildren: './pages/fusion-list/fusion-list.module#FusionListPageModule' },
  { path: 'skill/:name', loadChildren: './pages/skill/skill.module#SkillPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
