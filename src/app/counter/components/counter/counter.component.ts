import { Component } from "@angular/core";

@Component({
  selector : "app-counter",
  template : `<h1 class="fs-3 mb-1">Counter B: {{ counter }}</h1>
  <div class="my-2">
    <button name="Mas1" (click)="incrementar()" class="btn btn-primary btn-sm">+1</button>
    <button name="Menos1" (click)="incremtarBy(-1)" class="btn btn-success btn-sm mx-1">-1</button>
    <button name="Reset" (click)="resetCounter()" class="btn btn-danger btn-sm">Reset</button>
  </div>`,
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
