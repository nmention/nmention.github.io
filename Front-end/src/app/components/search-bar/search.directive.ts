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
    this.socketIo.socket.on('sendMovies', (msg: any) => {
      console.log("got response form server");
      //console.log(msg);
      this.searchBarComp.setoptionss(msg);
      console.log("YESSS")
      console.log(this.searchBarComp.optionss)


    });

    if (ngModel.valueChanges != null) {
        ngModel.valueChanges.subscribe((value: any) => {
        ngModel.viewToModelUpdate('real value');

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

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    console.log(event);
    if (event.keyCode == 13){
      this.socketIo.socket.emit("requestMovies",this.searchBarComp.value);
    }
  }
  /*@HostListener('document:keydown') onKeyPressed(){
    this.highlight(this.appSearch || 'red');
    console.log(this.searchBarComp.value)
    this.socketIo.socket.emit("requestMovies",this.searchBarComp.value);

  }*/






  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('')
  }

}
