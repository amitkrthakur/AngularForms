import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  hero: Hero = { name: '' }; 
  constructor() { }

  ngOnInit() {
  }

}

