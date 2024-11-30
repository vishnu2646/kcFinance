import { Component, ElementRef, HostListener, ViewChild, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-delivery-recipt',
    templateUrl: './delivery-recipt.component.html',
    styleUrls: ['./delivery-recipt.component.scss']
})
export class DeliveryReciptComponent {
    private context!: CanvasRenderingContext2D;
    private paint: boolean = false;

    public showCanvas: boolean = false;

    @ViewChild('canvas', { static: false })
    public canvas!: ElementRef<HTMLCanvasElement>;

    public imgSrcUrl: string = '';

    public ngAfterViewInit(): void {
        if(this.showCanvas) {
            this.initializeCanvas();
        }
    }

    public toggleShowCanvas(): void {

        if(this.showCanvas) {
            // Copy the canvas content as an image and paste it into the div
            const canvasElm = this.canvas.nativeElement;
            const imageData = canvasElm.toDataURL('image/png');

            // update the image url to the imgSrcUrl.
            this.imgSrcUrl = imageData;
            
            // Find the div element where the canvas content should be pasted
            const targetDiv = document.getElementById('signature-div');

            if (targetDiv) {
                // Clear contents in the signature div element.
                targetDiv.innerHTML = '';
                
                // Create an img element with the canvas content.
                const img = new Image();
                img.src = imageData;
                img.alt = 'Signature';
                img.classList.add('w-full', 'h-full', 'object-contain'); // Add CSS classes if needed
                
                // Append the image to the div
                targetDiv.appendChild(img);
            }
        }

        this.showCanvas = !this.showCanvas;

        if(this.showCanvas) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Optional: adds a smooth scrolling animation
            });

            setTimeout(() => {
                this.initializeCanvas();
            }, 0);
        }
    }

    private initializeCanvas() {
        if (this.canvas) {
            const canvasElm = this.canvas.nativeElement;
            this.context = canvasElm.getContext('2d') as CanvasRenderingContext2D;
            canvasElm.width = window.innerWidth;
            // Mouse events
            canvasElm.addEventListener('mousedown', this.startPosition.bind(this));
            canvasElm.addEventListener('mouseup', this.endPosition.bind(this));
            canvasElm.addEventListener('mousemove', this.onMouseMove.bind(this));

            // Touch events
            canvasElm.addEventListener('touchstart', this.startPosition.bind(this));
            canvasElm.addEventListener('touchend', this.endPosition.bind(this));
            canvasElm.addEventListener('touchmove', this.onTouchMove.bind(this));

            // Re-render Mouse events
            canvasElm.addEventListener('mousedown', this.startPosition.bind(this));
            canvasElm.addEventListener('mouseup', this.endPosition.bind(this));
            canvasElm.addEventListener('mousemove', this.onMouseMove.bind(this));

            // Touch events
            canvasElm.addEventListener('touchstart', this.startPosition.bind(this));
            canvasElm.addEventListener('touchend', this.endPosition.bind(this));
            canvasElm.addEventListener('touchmove', this.onTouchMove.bind(this));
        }
    }

    private startPosition(event: MouseEvent | TouchEvent): void {
        this.paint = true;
        this.draw(event);
    }

    private endPosition(): void {
        this.paint = false;
        this.context.beginPath(); // Reset the path to avoid connecting lines
    }

    private onMouseMove(event: MouseEvent): void {
        if (!this.paint) return;
        this.draw(event);
    }

    private onTouchMove(event: TouchEvent): void {
        if (!this.paint) return;
        event.preventDefault(); // Prevent scrolling while drawing
        this.draw(event);
    }

    private draw(event: MouseEvent | TouchEvent): void {
        const rect = this.canvas.nativeElement.getBoundingClientRect();
        let x: number, y: number;

        if (event instanceof MouseEvent) {
            x = event.clientX - rect.left;
            y = event.clientY - rect.top;
        } else if (event instanceof TouchEvent) {
            x = event.touches[0].clientX - rect.left;
            y = event.touches[0].clientY - rect.top;
        } else {
            return;
        }

        this.context.lineWidth = 3;
        this.context.lineCap = 'round';
        this.context.strokeStyle = '#000';

        this.context.lineTo(x, y);
        this.context.stroke();
        this.context.beginPath();
        this.context.moveTo(x, y);
    }
}
