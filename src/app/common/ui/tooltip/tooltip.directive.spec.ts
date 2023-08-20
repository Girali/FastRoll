import { TooltipDirective } from './tooltip.directive';
import { Component, ElementRef, Renderer2, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';

const mockElementRef = new ElementRef(document.createElement('div'));
const mockRenderer: any = {
  // any mock methods, if needed
};
const mockComponentFactoryResolver: any = {
  // any mock methods, if needed
};
const mockViewContainerRef: any = {
  // any mock methods, if needed
};

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [TooltipDirective],
    providers: [
      { provide: ElementRef, useValue: mockElementRef },
      { provide: Renderer2, useValue: mockRenderer },
      { provide: ComponentFactoryResolver, useValue: mockComponentFactoryResolver },
      { provide: ViewContainerRef, useValue: mockViewContainerRef }
    ]
  });
});


describe('TooltipDirective', () => {
  it('should create an instance', () => {
    const directive = new TooltipDirective(mockElementRef, mockRenderer, mockComponentFactoryResolver, mockViewContainerRef);
    expect(directive).toBeTruthy();
  });
  
});
