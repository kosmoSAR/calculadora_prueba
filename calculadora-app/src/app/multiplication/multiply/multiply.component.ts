import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.css']
})

export class MultiplyComponent {
  
  title = ' Multiply Component';
  number1:number = 0;
  number2:number = 0;
  result: number = 0;
  

  onMultiply():void{
    this.result = this.number1 * this.number2;
  }
}
