import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonButton } from '@ionic/angular/standalone';


@Component({
  selector: 'app-sexto-caso',
  templateUrl: './sexto-caso.component.html',
  styleUrls: ['./sexto-caso.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonButton,
  ],
})
export class SextoCasoComponent   {

   colorButton = 'danger';
  constructor() {
      }


}
