import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'ispair'
})
export class IsPairPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        var ispair = " it is not pair";
        if(value%2==0) {
            ispair = " this is pair";
        }
        return "year: " + value + ispair;
    }
}