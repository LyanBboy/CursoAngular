import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-add-character',
  standalone: false,
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  public character : Character = {
    name: 'ABC',
    power: 1000
  };

  @Output()
  public onNewEmiter : EventEmitter<Character> = new EventEmitter();

  emitCharacter(): void {

    if (this.character.name!.length === 0) return;

    this.onNewEmiter.emit(this.character);

    this.character = { name : '', power: 0};
  }
}
