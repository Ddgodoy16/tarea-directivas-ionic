import { Component} from '@angular/core';
import {
  IonItem,
  IonLabel,
  IonInput
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tercer-caso',
  templateUrl: './tercer-caso.component.html',
  styleUrls: ['./tercer-caso.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonLabel,
    IonItem,
    IonInput,
    FormsModule
  ],
})
export class TercerCasoComponent   {
  dni: string = '';

  constructor() { }



}
