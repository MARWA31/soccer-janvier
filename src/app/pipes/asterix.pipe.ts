import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch:string) {
    let result:string="";
    let voyels=["a","e","i","y","u","o"];
for (let i = 0; i < ch.length; i++) {
 let x=ch[i];
 for (let j = 0; j < voyels.length; j++) {
 if (ch[i].toLocaleLowerCase() ==voyels[j] ){
  x="*";
  break;
 }
 }
  result=result+x;
}
return result;
  }

}
