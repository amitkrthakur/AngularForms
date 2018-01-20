import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  name: string = '';
  nameDisplay: string = '';
  showSpinner: boolean = false;

  showName() {
    this.showSpinner = true;

    setTimeout(()=>{
       this.nameDisplay = this.name;
       this.showSpinner = false;
    }, 1000)
  }


  constructor() { }

  ngOnInit() {
  }

}
