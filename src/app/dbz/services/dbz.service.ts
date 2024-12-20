import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 100
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 410
    },
    {
      id: uuid(),
      name: 'Milk',
      power: 4145
    }
  ];

  onNewCharacter(character : Character): void {

    const newCharacter : Character = { id: uuid(), ...character };

    this.characters.push(newCharacter);

  }

  onDeleteCharacter(index : number) {

    this.characters.splice(index, 1);

  }

  onDeleteCharacterById(id : string) {

    this.characters = this.characters.filter(character => character.id != id);

  }
}
