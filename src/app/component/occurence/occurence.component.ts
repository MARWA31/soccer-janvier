import { Component, OnInit } from '@angular/core';
import { OccurencePipe } from 'src/app/pipes/occurence.pipe';
@Component({
  selector: 'app-occurence',
  templateUrl: './occurence.component.html',
  styleUrls: ['./occurence.component.css'],

})
export class OccurenceComponent implements OnInit {
  name = "mmmhhhdd";
  item: any = {};
  resultArray: any[] = [];
  constructor() { }

  ngOnInit() {
  }
  occurence(ch: string) {
    let result = [];
    for (let i = 0; i < ch.length; i++) {
      let car = ch[i];
      let found = false;
      for (let j = 0; j < result.length; j++) {
        if (ch[i] === result[j].lettre) {

          result[j].occurence = result[j].occurence + 1;
          found = true;
          break;
        }

      }
      if (!found) {
        result.push({ lettre: car, occurence: 1 });
      }
    }
    for (let i = 0; i < result.length; i++) {
      // pour afficher console
      console.log("Lettre:", result[i].lettre, "Occurrence:", result[i].occurence);
      let obj = {
        lettre: result[i].lettre,
        occurrence: result[i].occurence
      };
      this.resultArray.push(obj);
    }

  }
}
