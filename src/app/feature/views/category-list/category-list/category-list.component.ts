import { Component } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {


  constructor(){}

  /**
   *  Metodo para crear y eliminar fila con los inputs y botones para una categoría
   */
  public addCategory(){
    const tableBody = document.querySelector('.table-container tbody');
    if(tableBody){
      const newRow = document.createElement('tr');
      newRow.className = 'row m-0';
      newRow.innerHTML = 
       `<td class="col-4">
          <input type="text">
        </td>
        <td class="col-4">
          <input type="text">
        </td>
        <td class="col-4">
          <div class="row m-0">
            <div class="col-6 p-0">
              <button class="btn-action btn-save">Guardar</button>
            </div>
            <div class="col-6 p-0">
              <button class="btn-action btn-delete">Eliminar</button>
            </div>
          </div>
        </td>`;
        tableBody.appendChild(newRow);

        const deleteBtn = newRow.querySelector('.btn-delete');
        if(deleteBtn){
          deleteBtn.addEventListener('click', () => {
            newRow.remove();
          });
        }
    }
  }

}
