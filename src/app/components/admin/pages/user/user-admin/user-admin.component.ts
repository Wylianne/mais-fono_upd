import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { User } from '../../../../../models/user';
import { UserService } from '../../../../../services/user.service';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from '../../../../../confirm-dialog/confirm-dialog.component';
//import { LoadComponent } from '../../../../../load/load.component';

declare var $:any;

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css'],
  providers:[UserService]
})
export class UserAdminComponent implements OnInit {

  constructor(private userService:UserService,
    private router: Router,
    private chRef: ChangeDetectorRef) { }

  users: User[];
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
    this.userService.getAll().
                subscribe( users => {
                  this.users = users
                  
                  this.chRef.detectChanges();

                  // Now you can use jQuery DataTables :
                  //let table: any = $('#fonoaudiologos');
                  if ( $.fn.dataTable.isDataTable( '#users' ) ) {
                    this.dataTable = $('#users').DataTable();
                }
                else {
                  this.dataTable = $('#users').DataTable(
                        this.dataInfo 
                     );
                }

                  this.loading = false;
                  //this.dataTable = table.DataTable();
                });
  }
  
  createPage(){
    this.router.navigate(['/fonoaudiologo/user/novo']);
  }


 

}
