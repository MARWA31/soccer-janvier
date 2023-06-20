import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'occurence'
})
export class OccurencePipe implements PipeTransform {

  transform(ch :string){
    let result=[];
    for (let i = 0; i < ch.length; i++) {
    let car=ch[i];
    let found=false;
      for (let j = 0; j < result.length; j++) {
        if (ch[i]===result[j].lettre) {
  
      result[j].occurence= result[j].occurence+1;
  found=true;
  break;   
        }
        
      }
      if (!found) {
      result.push({lettre:car,occurence:1});
      }
    }
    for (let i = 0; i < result.length; i++) {
      console.log("Lettre:", result[i].lettre, "Occurrence:", result[i].occurence);
    }
  
    
  }

}
