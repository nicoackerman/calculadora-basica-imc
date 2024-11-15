import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  peso!: number;
  altura!: number;
  texto!: string;

  reiniciar(){

    const resultrango = document.getElementById("rango");
    const resultDiv = document.getElementById("imc");

    resultDiv!.innerHTML = ''
    resultrango!.innerHTML = ''

  }

  imc() {
    const imc =this.peso / ((this.altura / 100) ** 2); 
  
    const nuevoimc = document.createElement("p");
    nuevoimc.textContent = `${imc.toFixed(2)}`;

    const resultrango = document.getElementById("rango");
    const resultDiv = document.getElementById("imc");
    console.log(imc)

    if (Number.isFinite(imc)) {

      if (imc < 18.5){
        resultrango!.className = "text-lg font-semibold text-yellow-400"
        this.texto = "Bajo"
       }
  
       else if(imc > 18.5 && imc < 24.9){
        resultrango!.className = "text-lg font-semibold text-green-500"
        this.texto = "Normalidad"
       }
  
       else if (imc > 24.9 && imc < 29.9 ){
        resultrango!.className = "text-lg font-semibold text-orange-500"
        this.texto = "Sobrepeso"
       }
  
       else{
        resultrango!.className = "text-lg font-semibold text-red-500"
        this.texto = "Obesidad"
       }
       
      nuevoimc.className = "text-4xl font-bold text-gray-800";
    
      
      if (resultDiv) {
        resultDiv.innerHTML = '';
        resultDiv.appendChild(nuevoimc);
  
      }
  
  
      if (resultrango){
        resultrango.innerHTML = ''
        const textNode = document.createTextNode(this.texto);
        resultrango.appendChild(textNode);

      }

    }
    else{

      resultDiv!.innerHTML = ''
      resultrango!.innerHTML = ''

    }

} 





}  