import { Component, ViewChild, OnInit, AfterViewInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { CoolComponent } from "./cool/cool.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'custom-dir';

  @ViewChild('zone', {read: ViewContainerRef})
  tempRef: ViewContainerRef;
  
  constructor(
    private componentF: ComponentFactoryResolver
  ){

  }
  ngOnInit(){

  }


  ngAfterViewInit(){
    const factory = this.componentF.resolveComponentFactory(CoolComponent);
    const component = this.tempRef.createComponent(factory);
    component.instance.x  = 90;

    component.changeDetectorRef.detectChanges();
    component.instance.customE.subscribe(
      data =>{
        console.log(data);
        component.destroy();
      }
    )
    
  }

}
