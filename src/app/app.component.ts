import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string  = 'My first App';
  public counter: number = 10;

  constructor() {}

  public incrementar (): void {

    this.counter = this.counter +1 ;

  }

  public desincrementar(): void {

    this.counter = this.counter -1;
  }

  incremtarBy( value: number ):void {

    this.counter += value;
  }

  resetCounter (): void {
    this.counter = 10;
  }
}
