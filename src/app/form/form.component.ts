import { Component, OnInit } from '@angular/core';
// import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],

  // animations: [

  //   trigger('goals', [
  //     transition('* => *', [

  //       query(':enter', style({ opacity: 0 }), {optional: true}),

  //       query(':enter', stagger('300ms', [
  //         animate('.6s ease-in', keyframes([
  //           style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
  //           style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
  //           style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
  //         ]))]), {optional: true})
  //     ])
  //   ])

  // ]

})
export class FormComponent implements OnInit {

  name: string = '';
  todoDisplay: string;
  todo=[];
  nameDisplay: string = '';
  showSpinner: boolean = false;
  question: boolean = true;
  asktodo: boolean = false;

  showName() {
    this.showSpinner = true;
    this.question = false;

    setTimeout(()=>{
       this.nameDisplay = this.name;
       this.showSpinner = false;
       this.asktodo = true;
    }, 500)

    
  }

  additem(){
    this.todo.push(this.todoDisplay);
    this.todoDisplay='';

  }

  constructor() { }

  ngOnInit() {
  }

}
