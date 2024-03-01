import { IDataStructureView } from '../interfaces/structure-HTML-interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StructureViewsService {

  

  constructor() {}

  /**
   * Author: Oscar Alarcón - Febr-26-2024
   * @param data: datos que vienen de cada componente para saber cuantos inputs,
   * columnas, botones, clases se necesitan
   */
   public generateButtonsInputs(data: IDataStructureView){
    const tableBody = document.querySelector('.table-container tbody');
    if(!tableBody){
        console.log('No hay ningun tablebody en el html');
        return
    }
    const { columnClasses, numInputs, buttonColumnClasses, numBotones, clasesAdicionales, buttonTexts, buttonClasses } = data;

    const newRow = document.createElement('tr');
    newRow.className = `row m-0 ${clasesAdicionales}`;

    let rowHTML = '';
    for(let i = 0; i < numInputs; i++){
        rowHTML += `<td class="${columnClasses[i] || 'col'}"><input type="text"></td>`;
    }

    if(numBotones > 0 && buttonTexts && buttonClasses && buttonTexts.length === numBotones && buttonClasses.length === numBotones ){
        const lastColumnIndex = columnClasses.length -1;
        rowHTML += `<td class="${columnClasses[lastColumnIndex]}">`;
        rowHTML += `<div class="row m-0">`;
        for(let i = 0; i < numBotones; i++){
            rowHTML += `
            <div class="${buttonColumnClasses[i] || 'col'} p-0">
                <button class="${buttonClasses[i].join(' ')}">${buttonTexts[i]}</button>
            </div>
            `;
        }
        rowHTML += `</div></td>`;
    }
    newRow.innerHTML = rowHTML;
    tableBody.appendChild(newRow);
  }
}
