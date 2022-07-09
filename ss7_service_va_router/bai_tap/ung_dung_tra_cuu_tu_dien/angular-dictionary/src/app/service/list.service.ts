import {Injectable} from '@angular/core';
import {Word} from "../model/word";

@Injectable({
  providedIn: 'root'
})
export class ListService {
  words: Word[] = [{
    id:1,
    word: 'banana',
    mean: 'chuoi'
  },
    {
      id:2,
      word: 'father',
      mean: 'bo'
    },
    {
      id:3,
      word: 'mother',
      mean: 'me'
    },
    {
      id:4,
      word: 'bottle',
      mean: 'cai chai'
    },
    {
      id:5,
      word: 'student',
      mean: 'sinh vien'
    },
    {
      id:6,
      word: 'teacher',
      mean: 'giao vien'
    }
  ];

  constructor() {
  }

  getAll() {
    return this.words;
  }
  findById(id:number){
    for (let item of this.words){
      if (item.id == id) {
        return item;
      }
    }
  }

  translate(word:string):string{
    for (let item of this.words){
      if (word == item.word){
          return item.mean;
      }
    }
  }
}
