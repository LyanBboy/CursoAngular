import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: false
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      name:'Truynks',
      power: 478
    }
  ];

  @Output()
  public onDeleteId : EventEmitter<string> = new EventEmitter();

  onDeleteCharacter (id?: string): void{

    if (!id) return;

    this.onDeleteId.emit(id);
  }

 }
