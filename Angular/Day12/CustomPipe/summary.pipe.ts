import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:"summary"
})

export class SummaryPipe implements PipeTransform 
{
    transform(value: any,minrange?:number,maxrange?:number) {

        if(!value){
            return null;
        }        
        let temp=(<string> value);

         let  Startindex=(minrange)?minrange:0;
         let Endindex= (maxrange)?maxrange:50;
        
         return (temp.substring(Startindex,Endindex)+" ....");

        
    }

}