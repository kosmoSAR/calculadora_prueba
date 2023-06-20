import { Component } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})

export class SumaComponent {

  //Variables necesarias
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;
  operacionIndex: number = 0;
  selectOperaciones: Array<{ value: number; name: string }> = [
		{ value: 0, name: '+' },
		{ value: 1, name: '-' },
    { value: 2, name: '*' },
    { value: 3, name: '/' }
	];

  getSuma(){
    return this.numero1 + this.numero2;
  }

  getResta(){
    return this.numero1 - this.numero2;
  }

  getMultiplicacion(){
    return this.numero1 * this.numero2;
  }

  getDivision(){
    if(this.numero2 === 0) return 0;
    return this.numero1/this.numero2
  }

  getResultado(){
    let operaciones = [
      this.getSuma(),
      this.getResta(),
      this.getMultiplicacion(),
      this.getDivision()
    ]
    this.resultado = operaciones[this.operacionIndex]
  }

}
