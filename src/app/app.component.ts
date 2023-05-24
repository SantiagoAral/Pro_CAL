import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public displayValue: string = '';
  public resultado: number | undefined;
  public Historial: string[] = [];
  
  public item: string = '';

  public clearHistory(index: number): void {
    this.Historial.splice(index, 1);
  }
 
  public addToHistory(item: string): void {
    this.Historial.push(item);
  }
  
  
  public addToDisplay(value: string): void {
    this.displayValue += value;
  }

  public calculate(): void {
    
    try {
      if(this.displayValue == '' && 'Error'){

      }else{
      this.resultado = Number(eval(this.displayValue));
      this.addToHistory(this.displayValue +  '=' + Number(eval(this.displayValue)));
      
      this.displayValue = '';
      }
      
    } catch (error) {
      this.displayValue = 'Error';
    }
  }

  public Raiz():void{
    try {

      if(this.displayValue == '' && 'Error'){

      }else{

      
      this.resultado = Number(Math.sqrt(eval(this.displayValue)));
      this.addToHistory('√' + this.displayValue + '=' + Number(Math.sqrt(eval(this.displayValue))));
      
      this.displayValue = '';
    }
      
    } catch (error) {
      this.displayValue = 'Error';
    }
  }

  public Sen(): void{
    try {
      if(this.displayValue == '' && 'Error'){

      }else{
      this.resultado = Number(Math.sin(eval(this.displayValue)* (Math.PI/180.0)));
      this.addToHistory('Sen(' + this.displayValue + ')' + '=' + this.resultado);
      
      this.displayValue = '';
      }
      
    } catch (error) {
      this.displayValue = 'Error';
    }
    
  }

  public Cos(): void{
    try {
      if(this.displayValue == '' && 'Error'){

      }else{
      this.resultado = Number(Math.cos(eval(this.displayValue)* (Math.PI/180.0)));
      this.addToHistory('Cos(' + this.displayValue + ')' + '=' + this.resultado);
      
      this.displayValue = '';
      }
      
    } catch (error) {
      this.displayValue = 'Error';
    }
  }
  public Tan(): void{
    try {
      if(this.displayValue == ''){

      }else{
      this.resultado = Number(Math.tan(eval(this.displayValue)* (Math.PI/180.0)));
      this.addToHistory('Tan(' + this.displayValue + ')' + '=' + this.resultado);
      
      this.displayValue = '';
      }
      
    } catch (error) {
      this.displayValue = 'Error';
    }
  }

  public clearDisplay(): void {
    this.displayValue = '';
  }
  public CEDisplay(): void{
      this.displayValue = this.displayValue.slice(0, -1);
  }


}
