import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-primer-caso',
  templateUrl: './primer-caso.component.html',
  styleUrls: ['./primer-caso.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonButton, IonItem, IonLabel],
})
export class PrimerCasoComponent {
  contador: number = 0;

  constructor() {}

  incrementCounter() {
    this.contador += 1;
  }
}