import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cuarto-caso',
  templateUrl: './cuarto-caso.component.html',
  styleUrls: ['./cuarto-caso.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ],
})

export class CuartoCasoComponent   {
  nota: number = 80;
  constructor() { }



}
