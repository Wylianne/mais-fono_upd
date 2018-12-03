import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Fono } from '../../../../../models/fono';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from '../../../../../confirm-dialog/confirm-dialog.component';
import { Fonoaudiologo } from '../../../../../models/fonoaudiologo';
import { FonoaudiologoService } from '../../../../../services/fonoaudiologo.service';


declare var $:any;



@Component({
  selector: 'app-fono-admin',
  templateUrl: './fono-admin.component.html',
  styleUrls: ['./fono-admin.component.css'],
  providers:[
    FonoaudiologoService,
  ]
})
export class FonoAdminComponent implements OnInit {

  constructor(
    private fonoService:FonoaudiologoService,
    private router: Router,
    private chRef: ChangeDetectorRef) { }

  fonos: Fonoaudiologo[];
  dataTable: any;
  loading:boolean;

  dataInfo = {
    "language":{
      "sEmptyTable": "Nenhum registro encontrado",
      "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
      "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
      "sInfoFiltered": "(Filtrados de _MAX_ registros)",
      "sInfoPostFix": "",
      "sInfoThousands": ".",
      "sLengthMenu": "_MENU_ resultados por página",
      "sLoadingRecords": "Carregando...",
      "sProcessing": "Processando...",
      "sZeroRecords": "Nenhum registro encontrado",
      "sSearch": "Pesquisar",
      "oPaginate": {
          "sNext": "Próximo",
          "sPrevious": "Anterior",
          "sFirst": "Primeiro",
          "sLast": "Último"
      },
      "oAria": {
          "sSortAscending": ": Ordenar colunas de forma ascendente",
          "sSortDescending": ": Ordenar colunas de forma descendente"
      }
  }
  };

  ngOnInit() {
   this.loading = true;
   this.refreshData();
  }
  
  refreshData(){
    this.fonoService.getFonoaudiologos().
                subscribe( fonos => {
                  this.fonos = fonos
                  
                  this.chRef.detectChanges();

                  // Now you can use jQuery DataTables :
                  //let table: any = $('#fonoaudiologos');
                  if ( $.fn.dataTable.isDataTable( '#fonoaudiologos' ) ) {
                    this.dataTable = $('#fonoaudiologos').DataTable();
                }
                else {
                  this.dataTable = $('#fonoaudiologos').DataTable(
                        this.dataInfo
                     );
                }

                this.loading = false;
                  //this.dataTable = table.DataTable();
                });
  }
  

  createPage(){
    this.router.navigate(['/sistema/fono/novo']);
  }


 

}
