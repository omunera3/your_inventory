import { Component } from '@angular/core';
import { IDataStructureView } from 'src/app/core/shared/interfaces/structure-HTML-interface';
import { StructureViewsService } from 'src/app/core/shared/services/structure-views.service';

@Component({
  selector: 'app-sizes',
  templateUrl: './sizes.component.html',
  styleUrls: ['./sizes.component.scss']
})
export class SizesComponent {

  constructor(
    public structureViewsService: StructureViewsService
  ){}

  public addSizes(){
    const data: IDataStructureView = {
      columnClasses: ['col-4', 'col-4', 'col-4'],
      numInputs: 2,
      buttonColumnClasses: ['col-4', 'col-4', 'col-4', 'btn-action btn-products btn-save'],
      numBotones: 3,
      clasesAdicionales: '',
      buttonTexts: ['Guardar', 'Editar', 'Eliminar'],
      buttonClasses: [
        ['btn-action', 'btn-save'],
        ['btn-action', 'btn-products', 'btn-save'],
        ['btn-action', 'btn-delete'],
      ]
    };
    this.structureViewsService.generateButtonsInputs(data);
  }
}
