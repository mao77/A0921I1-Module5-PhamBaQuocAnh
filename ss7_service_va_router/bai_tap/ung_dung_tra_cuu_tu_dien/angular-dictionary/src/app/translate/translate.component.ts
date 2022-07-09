import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ListService} from "../service/list.service";
import {Word} from "../model/word";

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {
  word:Word;
  constructor(private activatedRoute: ActivatedRoute, private listService: ListService) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        const id = paramMap.get('id');
        console.log('id');
        this.word = listService.findById(parseInt(id));
      }
    )
  }

  ngOnInit(): void {
  }

}
