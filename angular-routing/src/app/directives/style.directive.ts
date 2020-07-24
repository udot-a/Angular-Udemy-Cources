import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
    selector: "[appStyle]"
})
export class StyleDirective {
    @Input("appStyle") color: string = "blue";
    @Input() fontWeight: string;

    @HostBinding("style.backgroundColor") elColor = null;

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.renderer.setStyle(this.el.nativeElement, "color", "tomato")
    }

    @HostListener("click", ["$event.target"]) onClick(event: Event) {
        this.renderer.setStyle(this.el.nativeElement, "font-weight", this.fontWeight)
    }
    @HostListener("mouseover", ["$event.target"]) onMouseOver(event: Event) {
        this.elColor = this.color;
    }
    @HostListener("mouseout", ["$event.target"]) onMouseOut(event: Event) {
        this.elColor = null;
    }
}
