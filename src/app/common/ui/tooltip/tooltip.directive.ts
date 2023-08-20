import { Directive, Input, ElementRef, Renderer2, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import {TooltipComponent} from "./tooltip.component";

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {
  @Input('tooltip') content: string = '';
  private tooltipComponent: any;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(TooltipComponent);
    this.tooltipComponent = this.viewContainerRef.createComponent(factory);
    this.tooltipComponent.instance.content = this.content;

    this.renderer.listen(this.el.nativeElement, 'mouseenter', () => {
      this.tooltipComponent.instance.show();
    });

    this.renderer.listen(this.el.nativeElement, 'mouseleave', () => {
      this.tooltipComponent.instance.hide();
    });
  }
}