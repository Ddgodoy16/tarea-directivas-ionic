import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { PrimerCasoComponent } from '../Componentes/primer-caso/primer-caso.component';
import { SegundoCasoComponent } from '../Componentes/segundo-caso/segundo-caso.component';
import { TercerCasoComponent } from '../Componentes/tercer-caso/tercer-caso.component';
import { CuartoCasoComponent } from '../Componentes/cuarto-caso/cuarto-caso.component';
import { QuintoCasoComponent } from '../Componentes/quinto-caso/quinto-caso.component';
import { SextoCasoComponent } from '../Componentes/sexto-caso/sexto-caso.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [PrimerCasoComponent, SegundoCasoComponent, TercerCasoComponent, CuartoCasoComponent, QuintoCasoComponent, SextoCasoComponent,  IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() {}
}