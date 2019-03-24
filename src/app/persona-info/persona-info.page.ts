import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PersonaDb } from '../personaDb';
import { arcana } from "../personaDb";

@Component({
  selector: 'app-persona-info',
  templateUrl: './persona-info.page.html',
  styleUrls: ['./persona-info.page.scss'],
})
export class PersonaInfoPage implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute) {

  }

  title: string;
  persona: any;
  personaList = new PersonaDb().persona;
  gushaList = this.personaList.filter(persona => persona.arcana === arcana.gusha && persona.gousei !== false);
  seigiList = this.personaList.filter(persona => persona.arcana === arcana.seigi && persona.gousei !== false);
  hoshiList = this.personaList.filter(persona => persona.arcana === arcana.hoshi && persona.gousei !== false);
  injaList = this.personaList.filter(persona => persona.arcana === arcana.inja && persona.gousei !== false);
  kouteiList = this.personaList.filter(persona => persona.arcana === arcana.koutei && persona.gousei !== false);
  kyoukouList = this.personaList.filter(persona => persona.arcana === arcana.kyoukou && persona.gousei !== false);
  majutushiList = this.personaList.filter(persona => persona.arcana === arcana.majutushi && persona.gousei !== false);
  renaiList = this.personaList.filter(persona => persona.arcana === arcana.renai && persona.gousei !== false);
  sensyaList = this.personaList.filter(persona => persona.arcana === arcana.sensya && persona.gousei !== false);
  sesseiList = this.personaList.filter(persona => persona.arcana === arcana.sessei && persona.gousei !== false);
  shinigamiList = this.personaList.filter(persona => persona.arcana === arcana.shinigami && persona.gousei !== false);
  sinpanList = this.personaList.filter(persona => persona.arcana === arcana.shinpan && persona.gousei !== false);
  taiyouList = this.personaList.filter(persona => persona.arcana === arcana.taiyou && persona.gousei !== false);
  touList = this.personaList.filter(persona => persona.arcana === arcana.tou && persona.gousei !== false);
  tukiList = this.personaList.filter(persona => persona.arcana === arcana.tuki && persona.gousei !== false);
  unmeiList = this.personaList.filter(persona => persona.arcana === arcana.unmei && persona.gousei !== false);
  akumaList = this.personaList.filter(persona => persona.arcana === arcana.akuma && persona.gousei !== false);
  goukiList = this.personaList.filter(persona => persona.arcana === arcana.gouki && persona.gousei !== false);
  hououList = this.personaList.filter(persona => persona.arcana === arcana.houou && persona.gousei !== false);
  keishisyaList = this.personaList.filter(persona => persona.arcana === arcana.keishisya && persona.gousei !== false);
  joteiList = this.personaList.filter(persona => persona.arcana === arcana.jotei && persona.gousei !== false);

  fusionList;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.title = params.get('name');
      console.log(name);
      this.persona = this.personaList.find(persona => persona.name === this.title);
      this.fusionList = this.getFusionList(this.persona);
    });
  }

  getFusionList(persona) {

    let fusionList = Array();
    switch (persona.arcana) {
      case arcana.gusha:
        fusionList = this.normalFusion(persona, this.majutushiList, this.goukiList, this.gushaList);
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.joteiList, this.hououList, this.gushaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.joteiList, this.shinigamiList, this.gushaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.kouteiList, this.renaiList, this.gushaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.sensyaList, this.keishisyaList, this.gushaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.seigiList, this.shinigamiList, this.gushaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.seigiList, this.akumaList, this.gushaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.sesseiList, this.akumaList, this.gushaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.tukiList, this.sinpanList, this.gushaList));
        break;

    }
    fusionList = this.sortList(fusionList, persona);
    fusionList.forEach(pair => {
      console.log(pair.first.name + ' x ' + pair.second.name);
    });

    return fusionList;
  }

  private sortList(fusionList, target) {

    const overTargetLevel = fusionList.filter(pair => target.level < pair.first.level || target.level < pair.second.level);
    fusionList = fusionList.filter(pair => !(target.level < pair.first.level || target.level < pair.second.level));

    this.sortAbsLevel(overTargetLevel);
    this.sortAbsLevel(fusionList);
    Array.prototype.push.apply(fusionList, overTargetLevel);
    return fusionList;
  }

  private sortAbsLevel(list) {
    // 絶対値でソート
    list.sort((a, b) => {
      const aAbs = Math.abs(a.first.level - a.second.level);
      const bAbs = Math.abs(b.first.level - b.second.level);
      return (aAbs > bAbs) ? 1 : -1;
    });
  }

  private normalFusion(target, firstArcana, secondArcana, resultArcana) {
    const fusionList = Array();
    firstArcana.forEach(first => {
      secondArcana.forEach(second => {
        const baseLevel = (first.level + second.level) / 2;
        const result = resultArcana.find(ret => ret.level > baseLevel);
        if (result === target) {
          fusionList.push({
            first: first,
            second: second
          });
        }
      });
    });
    return fusionList;
  }

  isBigWidesize() {
    const width = window.parent.screen.width;
    return width > 700;
  }

  isPortrait() {
    const ori = screen.orientation;
    return (ori.type === 'portrait-primary' || ori.type === 'portrait-secondary');
  }


}
