import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PersonaDb } from '../../data/personaDb';
import { arcana } from '../../data/personaDb';
import { HoumaFusion } from 'src/app/data/houma-fusion';

@Component({
  selector: 'app-fusion-list',
  templateUrl: './fusion-list.page.html',
  styleUrls: ['./fusion-list.page.scss'],
})
export class FusionListPage implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute) {
  }

  persona;
  personaList = new PersonaDb().persona;
  gushaList = this.personaList.filter(persona => persona.arcana === arcana.gusya && !persona.houma && !persona.abnormal_fusion);
  seigiList = this.personaList.filter(persona => persona.arcana === arcana.seigi && !persona.houma && !persona.abnormal_fusion);
  hoshiList = this.personaList.filter(persona => persona.arcana === arcana.hoshi && !persona.houma && !persona.abnormal_fusion);
  injaList = this.personaList.filter(persona => persona.arcana === arcana.inja && !persona.houma && !persona.abnormal_fusion);
  kouteiList = this.personaList.filter(persona => persona.arcana === arcana.koutei && !persona.houma && !persona.abnormal_fusion);
  kyoukouList = this.personaList.filter(persona => persona.arcana === arcana.kyoukou && !persona.houma && !persona.abnormal_fusion);
  majutushiList = this.personaList.filter(persona => persona.arcana === arcana.majutushi && !persona.houma && !persona.abnormal_fusion);
  renaiList = this.personaList.filter(persona => persona.arcana === arcana.rennai && !persona.houma && !persona.abnormal_fusion);
  sensyaList = this.personaList.filter(persona => persona.arcana === arcana.sensya && !persona.houma && !persona.abnormal_fusion);
  sesseiList = this.personaList.filter(persona => persona.arcana === arcana.sessei && !persona.houma && !persona.abnormal_fusion);
  shinigamiList = this.personaList.filter(persona => persona.arcana === arcana.shinigami && !persona.houma && !persona.abnormal_fusion);
  sinpanList = this.personaList.filter(persona => persona.arcana === arcana.shinpan && !persona.houma && !persona.abnormal_fusion);
  taiyouList = this.personaList.filter(persona => persona.arcana === arcana.taiyou && !persona.houma && !persona.abnormal_fusion);
  touList = this.personaList.filter(persona => persona.arcana === arcana.tou && !persona.houma && !persona.abnormal_fusion);
  tukiList = this.personaList.filter(persona => persona.arcana === arcana.tuki && !persona.houma && !persona.abnormal_fusion);
  unmeiList = this.personaList.filter(persona => persona.arcana === arcana.unmei && !persona.houma && !persona.abnormal_fusion);
  akumaList = this.personaList.filter(persona => persona.arcana === arcana.akuma && !persona.houma && !persona.abnormal_fusion);
  goukiList = this.personaList.filter(persona => persona.arcana === arcana.gouki && !persona.houma && !persona.abnormal_fusion);
  hououList = this.personaList.filter(persona => persona.arcana === arcana.houou && !persona.houma && !persona.abnormal_fusion);
  keishisyaList = this.personaList.filter(persona => persona.arcana === arcana.keishisya && !persona.houma && !persona.abnormal_fusion);
  joteiList = this.personaList.filter(persona => persona.arcana === arcana.jotei && !persona.houma && !persona.abnormal_fusion);
  houmaList = this.personaList.filter(persona => persona.houma);
  fusionList = [];
  multiFusionList;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const name = params.get('name');
      console.log(name);
      this.persona = this.personaList.find(persona => persona.name === name);
    });
  }

  ionViewDidEnter() {

    if (this.persona.abnormal_fusion) {
      this.multiFusion(this.persona).then(multiFusion => {
        this.multiFusionList = multiFusion;
      })
    } else {
      this.getFusionList(this.persona)
        .then(fusionList => {
          this.fusionList = fusionList;
        })
    }
  }



  async getFusionList(persona) {

    let fusionList = Array();

    fusionList = this.specialFusion(persona);

    if (fusionList.length !== 0) {
      return fusionList;
    }
    switch (persona.arcana) {
      case arcana.gusya:
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
      case arcana.majutushi:
        fusionList = this.normalFusion(persona, this.gushaList, this.hoshiList, this.majutushiList);
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.kyoukouList, this.hououList, this.majutushiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.kyoukouList, this.unmeiList, this.majutushiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.kyoukouList, this.shinigamiList, this.majutushiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.renaiList, this.tukiList, this.majutushiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.seigiList, this.injaList, this.majutushiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.goukiList, this.tukiList, this.majutushiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.shinigamiList, this.sinpanList, this.majutushiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.sesseiList, this.taiyouList, this.majutushiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.akumaList, this.touList, this.majutushiList));
        break;
      case arcana.kyoukou:
        fusionList = this.normalFusion(persona, this.gushaList, this.injaList, this.kyoukouList);
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.majutushiList, this.sensyaList, this.kyoukouList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.majutushiList, this.hoshiList, this.kyoukouList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.joteiList, this.keishisyaList, this.kyoukouList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.joteiList, this.sesseiList, this.kyoukouList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.kouteiList, this.sinpanList, this.kyoukouList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.hououList, this.tukiList, this.kyoukouList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.sensyaList, this.unmeiList, this.kyoukouList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.sensyaList, this.taiyouList, this.kyoukouList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.injaList, this.tukiList, this.kyoukouList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.injaList, this.akumaList, this.kyoukouList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.shinigamiList, this.taiyouList, this.kyoukouList));
        break;

      case arcana.jotei:
        fusionList = this.normalFusion(persona, this.gushaList, this.touList, this.joteiList);
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.majutushiList, this.keishisyaList, this.joteiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.kyoukouList, this.kouteiList, this.joteiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.hououList, this.sinpanList, this.joteiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.renaiList, this.touList, this.joteiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.renaiList, this.taiyouList, this.joteiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.seigiList, this.hoshiList, this.joteiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.unmeiList, this.sesseiList, this.joteiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.tukiList, this.taiyouList, this.joteiList));
        break;

      case arcana.koutei:
        fusionList = this.normalFusion(persona, this.majutushiList, this.seigiList, this.kouteiList);
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.kyoukouList, this.joteiList, this.kouteiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.joteiList, this.touList, this.kouteiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.joteiList, this.sinpanList, this.kouteiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.seigiList, this.sesseiList, this.kouteiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.seigiList, this.unmeiList, this.kouteiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.injaList, this.sinpanList, this.kouteiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.unmeiList, this.keishisyaList, this.kouteiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.touList, this.taiyouList, this.kouteiList));
        break;

      case arcana.houou:
        fusionList = this.normalFusion(persona, this.sesseiList, this.gushaList, this.hououList);
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.majutushiList, this.akumaList, this.hououList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.majutushiList, this.taiyouList, this.hououList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.kyoukouList, this.sensyaList, this.hououList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.kyoukouList, this.tukiList, this.hououList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.kouteiList, this.injaList, this.hououList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.sensyaList, this.sinpanList, this.hououList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.seigiList, this.goukiList, this.hououList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.injaList, this.goukiList, this.hououList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.unmeiList, this.akumaList, this.hououList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.goukiList, this.shinigamiList, this.hououList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.keishisyaList, this.taiyouList, this.hououList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.shinigamiList, this.tukiList, this.hououList));
        break;

      case arcana.rennai:
        fusionList = this.normalFusion(persona, this.unmeiList, this.gushaList, this.renaiList);
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.majutushiList, this.injaList, this.renaiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.majutushiList, this.tukiList, this.renaiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.joteiList, this.seigiList, this.renaiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.joteiList, this.hoshiList, this.renaiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.kouteiList, this.hoshiList, this.renaiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.hououList, this.taiyouList, this.renaiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.sensyaList, this.tukiList, this.renaiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.seigiList, this.keishisyaList, this.renaiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.akumaList, this.sinpanList, this.renaiList));
        break;

      case arcana.sensya:
        fusionList = this.normalFusion(persona, this.renaiList, this.gushaList, this.sensyaList);
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.majutushiList, this.sesseiList, this.sensyaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.kyoukouList, this.taiyouList, this.sensyaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.joteiList, this.goukiList, this.sensyaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.kouteiList, this.seigiList, this.sensyaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.hououList, this.shinigamiList, this.sensyaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.renaiList, this.injaList, this.sensyaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.renaiList, this.hoshiList, this.sensyaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.goukiList, this.sesseiList, this.sensyaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.goukiList, this.touList, this.sensyaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.shinigamiList, this.akumaList, this.sensyaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.tukiList, this.akumaList, this.sensyaList));
        break;

      case arcana.seigi:
        fusionList = this.normalFusion(persona, this.tukiList, this.gushaList, this.seigiList);
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.taiyouList, this.gushaList, this.seigiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.majutushiList, this.joteiList, this.seigiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.majutushiList, this.unmeiList, this.seigiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.kyoukouList, this.sinpanList, this.seigiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.joteiList, this.kouteiList, this.seigiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.kouteiList, this.akumaList, this.seigiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.hououList, this.unmeiList, this.seigiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.keishisyaList, this.tukiList, this.seigiList));
        break;

      case arcana.inja:
        fusionList = this.normalFusion(persona, this.hououList, this.gushaList, this.injaList);
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.majutushiList, this.shinigamiList, this.injaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.kyoukouList, this.hoshiList, this.injaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.joteiList, this.unmeiList, this.injaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.kouteiList, this.shinigamiList, this.injaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.sensyaList, this.goukiList, this.injaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.keishisyaList, this.touList, this.injaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.sesseiList, this.sinpanList, this.injaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.akumaList, this.taiyouList, this.injaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.touList, this.tukiList, this.injaList));
        break;

      case arcana.unmei:
        fusionList = this.normalFusion(persona, this.kyoukouList, this.renaiList, this.unmeiList);
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.joteiList, this.tukiList, this.unmeiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.kouteiList, this.hououList, this.unmeiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.hououList, this.injaList, this.unmeiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.sensyaList, this.touList, this.unmeiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.goukiList, this.sinpanList, this.unmeiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.keishisyaList, this.akumaList, this.unmeiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.sesseiList, this.touList, this.unmeiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.sesseiList, this.tukiList, this.unmeiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.hoshiList, this.sinpanList, this.unmeiList));
        break;

      case arcana.gouki:
        fusionList = this.normalFusion(persona, this.shinigamiList, this.gushaList, this.goukiList);
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.sinpanList, this.majutushiList, this.goukiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.joteiList, this.injaList, this.goukiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.kouteiList, this.sensyaList, this.goukiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.hououList, this.renaiList, this.goukiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.renaiList, this.sesseiList, this.goukiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.renaiList, this.unmeiList, this.goukiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.sensyaList, this.sesseiList, this.goukiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.injaList, this.shinigamiList, this.goukiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.injaList, this.sesseiList, this.goukiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.injaList, this.hoshiList, this.goukiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.keishisyaList, this.tukiList, this.goukiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.akumaList, this.hoshiList, this.goukiList));
        break;

      case arcana.keishisya:
        fusionList = this.normalFusion(persona, this.joteiList, this.gushaList, this.keishisyaList);
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.kouteiList, this.majutushiList, this.keishisyaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.kyoukouList, this.touList, this.keishisyaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.hououList, this.seigiList, this.keishisyaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.hououList, this.akumaList, this.keishisyaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.renaiList, this.sinpanList, this.keishisyaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.seigiList, this.taiyouList, this.keishisyaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.unmeiList, this.touList, this.keishisyaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.shinigamiList, this.sesseiList, this.keishisyaList));
        break;

      case arcana.shinigami:
        fusionList = this.normalFusion(persona, this.majutushiList, this.gushaList, this.shinigamiList);
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.goukiList, this.gushaList, this.shinigamiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.majutushiList, this.hououList, this.shinigamiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.kyoukouList, this.seigiList, this.shinigamiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.kyoukouList, this.keishisyaList, this.shinigamiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.hououList, this.sesseiList, this.shinigamiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.renaiList, this.goukiList, this.shinigamiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.goukiList, this.akumaList, this.shinigamiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.keishisyaList, this.sesseiList, this.shinigamiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.hoshiList, this.touList, this.shinigamiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.taiyouList, this.sinpanList, this.shinigamiList));
        break;

      case arcana.sessei:
        fusionList = this.normalFusion(persona, this.kouteiList, this.gushaList, this.sesseiList);
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.akumaList, this.gushaList, this.sesseiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.majutushiList, this.kyoukouList, this.sesseiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.majutushiList, this.touList, this.sesseiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.kyoukouList, this.injaList, this.sesseiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.renaiList, this.sensyaList, this.sesseiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.renaiList, this.shinigamiList, this.sesseiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.sensyaList, this.akumaList, this.sesseiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.unmeiList, this.goukiList, this.sesseiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.goukiList, this.keishisyaList, this.sesseiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.tukiList, this.hoshiList, this.sesseiList));
        break;

      case arcana.akuma:
        fusionList = this.normalFusion(persona, this.renaiList, this.majutushiList, this.akumaList);
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.goukiList, this.kyoukouList, this.akumaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.sesseiList, this.kyoukouList, this.akumaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.kouteiList, this.keishisyaList, this.akumaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.kouteiList, this.sesseiList, this.akumaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.sensyaList, this.injaList, this.akumaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.sensyaList, this.shinigamiList, this.akumaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.seigiList, this.tukiList, this.akumaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.injaList, this.taiyouList, this.akumaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.unmeiList, this.hoshiList, this.akumaList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.shinigamiList, this.hoshiList, this.akumaList));
        break;

      case arcana.tou:
        fusionList = this.normalFusion(persona, this.keishisyaList, this.gushaList, this.touList);
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.joteiList, this.taiyouList, this.touList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.kouteiList, this.goukiList, this.touList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.kouteiList, this.tukiList, this.touList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.hououList, this.hoshiList, this.touList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.seigiList, this.sinpanList, this.touList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.unmeiList, this.sinpanList, this.touList));
        break;

      case arcana.hoshi:
        fusionList = this.normalFusion(persona, this.seigiList, this.gushaList, this.hoshiList);
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.joteiList, this.sensyaList, this.hoshiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.kouteiList, this.touList, this.hoshiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.hououList, this.sensyaList, this.hoshiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.injaList, this.unmeiList, this.hoshiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.injaList, this.keishisyaList, this.hoshiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.unmeiList, this.shinigamiList, this.hoshiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.unmeiList, this.taiyouList, this.hoshiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.keishisyaList, this.sinpanList, this.hoshiList));
        break;

      case arcana.tuki:
        fusionList = this.normalFusion(persona, this.kyoukouList, this.gushaList, this.tukiList);
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.sensyaList, this.gushaList, this.tukiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.kyoukouList, this.akumaList, this.tukiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.renaiList, this.akumaList, this.tukiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.sensyaList, this.seigiList, this.tukiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.sensyaList, this.hoshiList, this.tukiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.goukiList, this.hoshiList, this.tukiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.goukiList, this.taiyouList, this.tukiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.keishisyaList, this.shinigamiList, this.tukiList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.touList, this.sinpanList, this.tukiList));
        break;


      case arcana.taiyou:
        fusionList = this.normalFusion(persona, this.sinpanList, this.gushaList, this.taiyouList);
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.kouteiList, this.unmeiList, this.taiyouList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.hououList, this.keishisyaList, this.taiyouList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.renaiList, this.keishisyaList, this.taiyouList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.seigiList, this.touList, this.taiyouList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.sensyaList, this.hoshiList, this.taiyouList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.unmeiList, this.tukiList, this.taiyouList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.shinigamiList, this.touList, this.taiyouList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.sesseiList, this.hoshiList, this.taiyouList));
        break;


      case arcana.shinpan:
        fusionList = this.normalFusion(persona, this.taiyouList, this.kouteiList, this.sinpanList);
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.hououList, this.touList, this.sinpanList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.renaiList, this.joteiList, this.sinpanList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.renaiList, this.seigiList, this.sinpanList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.injaList, this.touList, this.sinpanList));
        Array.prototype.push.apply(fusionList, this.normalFusion(persona, this.hoshiList, this.taiyouList, this.sinpanList));
        break;
    }
    Array.prototype.push.apply(fusionList, this.houmaFusion(persona));
    Array.prototype.push.apply(fusionList, this.sameArcanaFusion(persona));

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
  private houmaFusion(target) {
    const fusionList = Array();
    const list = this.getArcanaList(target.arcana);
    const targetIndex = list.findIndex(persona => persona.name === target.name);

    list.forEach((sameArcana, index) => {
      this.houmaList.forEach(houma => {
        const value = HoumaFusion.getValue(houma, sameArcana.arcana);

        if (index + value === targetIndex) {
          fusionList.push(
            {
              first: sameArcana,
              second: houma
            }
          );
        }
      });
    });
    return fusionList;

  }

  sameArcanaFusion(target) {
    const fusionList = Array();
    const list = this.getArcanaList(target.arcana);
    list.forEach(persona1 => {
      list.forEach(persona2 => {
        if (persona1 === persona2 || persona1.level > persona2.level) {
          return;
        }
        const level = (persona1.level + persona2.level) / 2;
        const filterList = list.filter(persona => (persona !== persona1 && persona !== persona2) && persona.level <= level);
        if (filterList.length !== 0 && filterList[filterList.length - 1].name === target.name) {
          fusionList.push(
            {
              first: persona1,
              second: persona2,
            }
          );
        }
      });
    });
    return fusionList;
  }

  private getArcanaList(tgrArcana: arcana) {
    let list
    switch (tgrArcana) {
      case arcana.akuma:
        list = this.akumaList;
        break;
      case arcana.gouki:
        list = this.goukiList;
        break;
      case arcana.gusya:
        list = this.gushaList;
        break;
      case arcana.hoshi:
        list = this.hoshiList;
        break;
      case arcana.houou:
        list = this.hououList;
        break;
      case arcana.inja:
        list = this.injaList;
        break;
      case arcana.jotei:
        list = this.joteiList;
        break;
      case arcana.keishisya:
        list = this.keishisyaList;
        break;
      case arcana.koutei:
        list = this.kouteiList;
        break;
      case arcana.kyoukou:
        list = this.kyoukouList;
        break;
      case arcana.majutushi:
        list = this.majutushiList;
        break;
      case arcana.rennai:
        list = this.renaiList;
        break;
      case arcana.seigi:
        list = this.seigiList;
        break;
      case arcana.sensya:
        list = this.sensyaList;
        break;
      case arcana.sessei:
        list = this.sesseiList;
        break;
      case arcana.shinigami:
        list = this.shinigamiList;
        break;
      case arcana.shinpan:
        list = this.sinpanList;
        break;
      case arcana.taiyou:
        list = this.taiyouList;
        break;
      case arcana.tou:
        list = this.touList;
        break;
      case arcana.tuki:
        list = this.tukiList;
        break;
      case arcana.unmei:
        list = this.unmeiList;
        break;

    }
    return list;
  }


  private specialFusion(persona) {
    const fusionList = Array();
    if (persona.name === 'シヴァ') {
      fusionList.push({
        first: this.kouteiList.find(item => item.name === 'バロン'),
        second: this.majutushiList.find(item => item.name === 'ランダ')
      });
    } else if (persona.name === 'アルダー') {
      fusionList.push({
        first: this.sinpanList.find(item => item.name === 'シヴァ'),
        second: this.renaiList.find(item => item.name === 'パールヴァティ')
      });

    } else if (persona.name === 'アリス') {
      fusionList.push({
        first: this.akumaList.find(item => item.name === 'ネビロス'),
        second: this.akumaList.find(item => item.name === 'べリアル')
      });

    }
    return fusionList;
  }

  isBigWidesize() {
    const width = window.innerWidth;
    return width > 800;
  }

  async multiFusion(persona) {
    const personaList = new Array();
    if (persona.name === 'セト') {
      personaList.push(this.kyoukouList.find(item => item.name === 'イシス'));
      personaList.push(this.kouteiList.find(item => item.name === 'トート'));
      personaList.push(this.sinpanList.find(item => item.name === 'アヌビス'));
      personaList.push(this.taiyouList.find(item => item.name === 'ホルス'));
    } else if (persona.name === 'バグス') {
      personaList.push(this.renaiList.find(item => item.name === 'ピクシー'));
      personaList.push(this.shinigamiList.find(item => item.name === 'ピシャーチャ'));
      personaList.push(this.joteiList.find(item => item.name === 'ハリティー'));

    } else if (persona.name === 'フラロウス') {
      personaList.push(this.hououList.find(item => item.name === 'ベリス'));
      personaList.push(this.akumaList.find(item => item.name === 'アンドラス'));
      personaList.push(this.kouteiList.find(item => item.name === 'エリゴール'));


    } else if (persona.name === 'ネコショウグン') {
      personaList.push(this.hoshiList.find(item => item.name === 'コダマ'));
      personaList.push(this.injaList.find(item => item.name === 'スダマ'));
      personaList.push(this.hououList.find(item => item.name === 'アンズー'));

    } else if (persona.name === 'ヴァスキ') {

      personaList.push(this.injaList.find(item => item.name === 'ナーガ'));
      personaList.push(this.sesseiList.find(item => item.name === 'ナーガラジャ'));
      personaList.push(this.hoshiList.find(item => item.name === 'アナンタ'));
    } else if (persona.name === 'ジャアクフロスト') {
      personaList.push(this.majutushiList.find(item => item.name === 'ジャックランタン'));
      personaList.push(this.majutushiList.find(item => item.name === 'ジャックフロスト'));
      personaList.push(this.kouteiList.find(item => item.name === 'キングフロスト'));

    } else if (persona.name === 'ソロネ') {
      personaList.push(this.seigiList.find(item => item.name === 'パワー'));
      personaList.push(this.seigiList.find(item => item.name === 'メルキセデク'));
      personaList.push(this.seigiList.find(item => item.name === 'ドミニオン'));

    } else if (persona.name === 'オンギョウキ') {
      personaList.push(this.sensyaList.find(item => item.name === 'キンキ'));
      personaList.push(this.tukiList.find(item => item.name === 'スイキ'));
      personaList.push(this.hoshiList.find(item => item.name === 'フウキ'));

    } else if (persona.name === 'ミカエル') {
      personaList.push(this.renaiList.find(item => item.name === 'ラファエル'));
      personaList.push(this.sesseiList.find(item => item.name === 'ガブリエル'));
      personaList.push(this.seigiList.find(item => item.name === 'ウリエル'));

    } else if (persona.name === 'トランペッター') {
      personaList.push(this.sensyaList.find(item => item.name === 'ホワイトライダー'));
      personaList.push(this.touList.find(item => item.name === 'レッドライダー'));
      personaList.push(this.touList.find(item => item.name === 'ブラックライダー'));
      personaList.push(this.shinigamiList.find(item => item.name === 'ペイルライダー'));

    } else if (persona.name === 'コウリュウ') {
      personaList.push(this.sesseiList.find(item => item.name === 'ゲンブ'));
      personaList.push(this.sesseiList.find(item => item.name === 'セイリュウ'));
      personaList.push(this.taiyouList.find(item => item.name === 'スザク'));
      personaList.push(this.sesseiList.find(item => item.name === 'ビャッコ'));

    } else if (persona.name === 'アスラおう') {
      personaList.push(this.goukiList.find(item => item.name === 'ゾウチョウテン'));
      personaList.push(this.sesseiList.find(item => item.name === 'ジコクテン'));
      personaList.push(this.injaList.find(item => item.name === 'コウモクテン'));
      personaList.push(this.hououList.find(item => item.name === 'ビシャモンテン'));

    } else if (persona.name === 'ヨシツネ') {
      personaList.push(this.kouteiList.find(item => item.name === 'オオクニヌシ'));
      personaList.push(this.sesseiList.find(item => item.name === 'シキオウジ'));
      personaList.push(this.injaList.find(item => item.name === 'アラハバキ'));
      personaList.push(this.taiyouList.find(item => item.name === 'ヤタガラス'));
      personaList.push(this.majutushiList.find(item => item.name === 'フツヌシ'));

    } else if (persona.name === 'スラオシャ') {
      personaList.push(this.sesseiList.find(item => item.name === 'ミトラ'));
      personaList.push(this.taiyouList.find(item => item.name === 'ミトラス'));
      personaList.push(this.seigiList.find(item => item.name === 'メルキセデク'));
      personaList.push(this.tukiList.find(item => item.name === 'リリス'));
      personaList.push(this.sesseiList.find(item => item.name === 'ガブリエル'));

    } else if (persona.name === 'シュウ') {
      personaList.push(this.keishisyaList.find(item => item.name === 'ヘカトンケイル'));
      personaList.push(this.sensyaList.find(item => item.name === 'ホワイトライダー'));
      personaList.push(this.sensyaList.find(item => item.name === 'トール'));
      personaList.push(this.touList.find(item => item.name === 'ヨシツネ'));
      personaList.push(this.hoshiList.find(item => item.name === 'クー・フーリン'));

    } else if (persona.name === 'メタトロン') {
      personaList.push(this.seigiList.find(item => item.name === 'プリンシパリティ'));
      personaList.push(this.seigiList.find(item => item.name === 'パワー'));
      personaList.push(this.seigiList.find(item => item.name === 'ドミニオン'));
      personaList.push(this.seigiList.find(item => item.name === 'メルキセデク'));
      personaList.push(this.tukiList.find(item => item.name === 'サンダルフォン'));
      personaList.push(this.sinpanList.find(item => item.name === 'ミカエル'));

    } else if (persona.name === 'ルシファー') {
      personaList.push(this.sinpanList.find(item => item.name === 'アヌビス'));
      personaList.push(this.hoshiList.find(item => item.name === 'アナンタ'));
      personaList.push(this.sinpanList.find(item => item.name === 'トランペッター'));
      personaList.push(this.sinpanList.find(item => item.name === 'ミカエル'));
      personaList.push(this.seigiList.find(item => item.name === 'メタトロン'));
      personaList.push(this.sinpanList.find(item => item.name === 'サタン'));

    }
    return personaList;
  }

  onClickPersona(name) {

    this.router.navigateByUrl('/persona-info/' + name);

  }
}
