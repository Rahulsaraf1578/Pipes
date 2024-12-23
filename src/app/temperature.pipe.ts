import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'temp',
    standalone:true
})
export class TemperaturePipe implements PipeTransform{
    transform(value:number | string){
        let val :number;

        if(typeof value ==='string'){
            val = parseFloat(value);
        }else{
            val = value;
        }

        const outputTemperature = val * (9/5) + 32;
        
        return `${outputTemperature} °F`;
    }
}