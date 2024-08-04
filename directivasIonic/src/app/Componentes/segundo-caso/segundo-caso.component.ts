import { Component } from '@angular/core';
import {
  IonItem,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-segundo-caso',
  templateUrl: './segundo-caso.component.html',
  styleUrls: ['./segundo-caso.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
  
    IonItem
  ],
})
export class SegundoCasoComponent {
  animals: string[] = ['Perro', 'Gato', 'Elefante', 'Tigre', 'León' , 'Jirafa', 'Conejo'];


  constructor() { }

 

}
