import { Directive,ElementRef, HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appColorgreen]'
})
export class ColorgreenDirective {

@Input() appColorgreen:string='';

  constructor(private element:ElementRef) {
    this.element.nativeElement.style.color="green";
   }

   @HostListener('mouseenter') mouseEnter(){
     this.cambiarColorBackground(this.appColorgreen)
   }  
    @HostListener('mouseleave') mouseLeave(){
      this.cambiarColorBackground("transparent")
   }  
    

    cambiarColorBackground(color:string){
      this.element.nativeElement.style.backgroundColor=color;
    } 

  }
