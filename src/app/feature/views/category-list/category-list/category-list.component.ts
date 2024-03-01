import { Component } from '@angular/core';
import { IDataStructureView } from 'src/app/core/shared/interfaces/structure-HTML-interface';
import { StructureViewsService } from 'src/app/core/shared/services/structure-views.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {


  constructor(
    public structureViewsService: StructureViewsService
  ){}

  /**
   *  Metodo para crear y eliminar fila con los inputs y botones para una categoría
   */
  // public addCategory(){
  //   const tableBody = document.querySelector('.table-container tbody');
  //   if(tableBody){
  //     const newRow = document.createElement('tr');
  //     newRow.className = 'row m-0';
  //     newRow.innerHTML = 
  //      `<td class="col-4">
  //         <input type="text">
  //       </td>
  //       <td class="col-4">
  //         <input type="text">
  //       </td>
  //       <td class="col-4">
  //       <div class="row m-0">
  //         <div class="col-6 p-0">
  //           <button class="btn-action btn-save">Guardar</button>
  //         </div>
  //         <div class="col-6 p-0">
  //           <button class="btn-action btn-delete">Eliminar</button>
  //         </div>
  //       </div>
  //       <div class="row m-0">
  //         <div class="col-4 p-0">
  //           <button class="btn-action btn-products btn-save" style="display: none;">Productos</button>
  //         </div>
  //         <div class="col-4 p-0">
  //           <button class="btn-action btn-edit btn-save" style="display: none;">Editar</button>
  //         </div>
  //         <div class="col-4 p-0">
  //           <button class="btn-action btn-delete-new btn-delete" style="display: none;">Eliminar</button>
  //         </div>
  //       </div>
  //     </td>`;
  //       tableBody.appendChild(newRow);

  //       const deleteBtn = newRow.querySelector('.btn-delete') as HTMLElement;
  //       if(deleteBtn){
  //         deleteBtn.addEventListener('click', () => {
  //           newRow.remove();
  //         });
  //       }

  //       const saveBtn = newRow.querySelector('.btn-save') as HTMLElement;
  //       if (saveBtn) {
  //         saveBtn.addEventListener('click', () => {
  //           const productsBtn = saveBtn.parentElement?.parentElement?.nextElementSibling?.querySelector('.btn-products') as HTMLElement;
  //           const editBtn = saveBtn.parentElement?.parentElement?.nextElementSibling?.querySelector('.btn-edit') as HTMLElement;
  //           const deleteNewBtn = saveBtn.parentElement?.parentElement?.nextElementSibling?.querySelector('.btn-delete-new') as HTMLElement;
        
  //           if (productsBtn && editBtn && deleteNewBtn) {
  //             productsBtn.style.display = 'inline-block';
  //             editBtn.style.display = 'inline-block';
  //             deleteNewBtn.style.display = 'inline-block';
        
  //             saveBtn.style.display = 'none';
  //             deleteBtn.style.display = 'none';
  //           }
  //         });
  //       }
  //   }
  // }

      public addCategory(){
        const data: IDataStructureView = {
          columnClasses: ['col-4', 'col-4', 'col-4'],
          numInputs: 2,
          buttonColumnClasses: ['col-4', 'col-4', 'col-4', 'btn-action btn-products btn-save'],
          numBotones: 3,
          clasesAdicionales: '',
          buttonTexts: ['Guardar', 'Productos', 'Eliminar'],
          buttonClasses: [
            ['btn-action', 'btn-save'],
            ['btn-action', 'btn-products', 'btn-save'],
            ['btn-action', 'btn-delete'],
          ]
        };
        this.structureViewsService.generateButtonsInputs(data);
      }
}
