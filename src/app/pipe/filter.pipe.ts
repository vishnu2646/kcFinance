import { Pipe, PipeTransform } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, of, switchMap } from 'rxjs';

@Pipe({
    name: 'filterdata'
})
export class FilterPipe implements PipeTransform {

    transform(items: any[], filterText: String): Observable<any[]> {

        if(filterText.length === 0 || !filterText) {
            return of(items);
        }

        if(filterText.length > 0) {
            return of(filterText).pipe(
                debounceTime(300),
                distinctUntilChanged(),
                switchMap(filterText => {
                    const lowercasedFilterText = filterText.toLowerCase();
                    const filteredData = items.filter(item => {
                        // Convert item values to lowercase and check for match.
                        const values = Object.values(item).map((val: any) => val.toString().toLowerCase());
                        return values.some(val => val.includes(lowercasedFilterText));
                    });
                    return of(filteredData);
                })
            );
        }

        return of([]);
    }

}
