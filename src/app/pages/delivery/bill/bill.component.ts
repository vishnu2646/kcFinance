import { Component } from '@angular/core';

@Component({
    selector: 'app-bill',
    templateUrl: './bill.component.html',
    styleUrls: ['./bill.component.scss']
})
export class BillComponent {

    /**
     * Method to print the bill.
     * @param id element id
     */
    public printDiv(id: string): void {
        // contents of the div to be printed.
        const contents: string | undefined = document.getElementById(id)?.innerHTML;

        // Original contents of the page.
        const pageContents = document.body.innerHTML;

        if(contents) {
            // update the document body to the printable contents.
            document.body.innerHTML = contents;
            window.print();
    
            // Re-update the document body with original contents.
            document.body.innerHTML = pageContents;
        }

    }
}
