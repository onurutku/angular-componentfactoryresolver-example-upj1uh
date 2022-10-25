import { OnInit } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { Directive } from '@angular/core';
import { HelloComponent } from './hello.component';

@Directive({
  selector: '[ad-host]',
})
export class AdDirective implements OnInit {
  helloComponent = HelloComponent; //disaridan gelen component
  constructor(
    public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}
  ngOnInit() {
    //verilecek olan componenti dogru type olarak bir degiskene atiyor
    let componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        this.helloComponent as any
      );
    // verilecegi yeri temizliyor
    this.viewContainerRef.clear();
    //yeni componenti koyuyor
    this.viewContainerRef.createComponent(componentFactory);
  }
}
