import { Component, OnInit } from '@angular/core';
import {ListService} from "../service/list.service";
import {Word} from "../model/word";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  words : Word[] = [];

  constructor(private listService:ListService) {

  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.words = this.listService.getAll();

  }

  onSubmit() {
    console.log(this.words[0].word)
  }
}
