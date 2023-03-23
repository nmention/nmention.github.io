import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {NgControl, NgModel} from "@angular/forms";
import {SearchBarComponent} from "./search-bar.component";
import {SocketioService} from "../../services/socketio.service";

@Directive({
  selector: '[appSearch]'
})
export class SearchDirective {

  private el: any;

  constructor(private element : ElementRef, private ngModel : NgControl, private searchBarComp : SearchBarComponent,private socketIo : SocketioService) {
      this.el = this.element.nativeElement;
    if (ngModel.valueChanges != null) {
        ngModel.valueChanges.subscribe((value: any) => {
        ngModel.viewToModelUpdate('real value');
        socketIo.socket.emit("requestMovies",searchBarComp.value);
      });
    }
  }


  highlight(color :string){
    this.element.nativeElement.style.backgroundColor = color;
  }
  @Input() appSearch = '';

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.appSearch || 'red');
    console.log(this.searchBarComp.value)
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('')
  }

}
