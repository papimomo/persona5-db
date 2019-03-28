import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaRowComponent } from './persona-row/persona-row.component';
import { IonicModule } from '@ionic/angular';
import { SkillComponent } from './skill/skill.component';
import { FusionComponent } from './fusion/fusion.component';

@NgModule({
  declarations: [
    PersonaRowComponent,
    SkillComponent,
    FusionComponent,
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  exports: [
    PersonaRowComponent,
    SkillComponent,
    FusionComponent,
  ]
})
export class ComponentsModule { }
