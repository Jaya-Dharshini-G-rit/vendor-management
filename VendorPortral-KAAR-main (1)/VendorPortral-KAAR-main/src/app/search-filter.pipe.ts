

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any[], filterString: string,propName:any): any {

    const resultArray:any=[];
    if(value.length ===0 || filterString === ''){
      return value;
    }

    for(const item of value){
      if(item[propName].includes(filterString)){
        resultArray.push(item)
      }
    }

    return resultArray;
  }

}
