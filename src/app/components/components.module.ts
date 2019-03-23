import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaRowComponent } from './persona-row/persona-row.component';
import { IonicModule } from '@ionic/angular';
import { SkillComponent } from './skill/skill.component';

@NgModule({
  declarations: [
    PersonaRowComponent,
    SkillComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  exports: [
    PersonaRowComponent,
    SkillComponent
  ]
})
export class ComponentsModule { }
