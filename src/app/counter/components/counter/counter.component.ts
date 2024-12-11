import { Component } from "@angular/core";

@Component({
  selector : "app-counter",
  template : `<h1>Hola counter {{ counter }}</h1>
    <button name="Mas1" (click)="incrementar()" >+1</button>
    <button name="Menos1" (click)="incremtarBy(-1)">-1</button>
    <button name="Reset" (click)="resetCounter()">Reset</button>`,
  standalone:false
})
export class CounterComponent {

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
