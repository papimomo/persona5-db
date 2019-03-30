import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaRowComponent } from './persona-row/persona-row.component';
import { IonicModule } from '@ionic/angular';
import { SkillComponent } from './skill/skill.component';
import { FusionComponent } from './fusion/fusion.component';
import { PersonaHorizontalComponent } from './persona-horizontal/persona-horizontal.component';

@NgModule({
  declarations: [
    PersonaRowComponent,
    SkillComponent,
    FusionComponent,
    PersonaHorizontalComponent,
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  exports: [
    PersonaRowComponent,
    SkillComponent,
    FusionComponent,
    PersonaHorizontalComponent,
  ]
})
export class ComponentsModule { }
