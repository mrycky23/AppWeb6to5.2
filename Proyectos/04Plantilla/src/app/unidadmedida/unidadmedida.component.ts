import { Component, OnInit } from '@angular/core';
import { IUnidadMedida } from '../Interfaces/iunidadmedida';
import { RouterLink } from '@angular/router';
import { SharedModule } from '../theme/shared/shared.module';
import { UnidadmedidaService } from '../Services/unidadmedida.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-unidadmedida',
  standalone: true,
  imports: [RouterLink, SharedModule, ReactiveFormsModule],
  templateUrl: './unidadmedida.component.html',
  styleUrl: './unidadmedida.component.scss'
})
export class UnidadmedidaComponent implements OnInit {
  listaunidades: IUnidadMedida[] = [];

  //Definir formGroup
  frm_UnidadMedida: FormGroup;

  constructor(private unidadServicio: UnidadmedidaService) {}
  ngOnInit(): void {

    // Inicializar el formulario
    this.frm_UnidadMedida = new FormGroup({
      // Aquí podrías añadir más controles si tu formulario los requiere
      unidadMedida: new FormControl(''),
    });
    
    this.unidadServicio.todos().subscribe((data) => {
      this.listaunidades = data;
    });
  }

  eliminar(idUnidad_Medida: number) {}
}