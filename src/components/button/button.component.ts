import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ccl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log('Button Clicked');
  }

}
