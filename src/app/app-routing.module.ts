import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AdminHomeComponent } from './components/admin/pages/admin-home/admin-home.component';
import { AdminProgramsComponent } from './components/admin/pages/admin-programs/admin-programs.component';

import { LoginComponent } from './components/login/login.component';
import { OnepageComponent } from './components/onepage/onepage.component';
import { UserUpdateComponent } from './components/admin/pages/user/user-update/user-update.component';
import { UserAdminComponent } from './components/admin/pages/user/user-admin/user-admin.component';
import { UserViewComponent } from './components/admin/pages/user/user-view/user-view.component';
import { FonoComponent } from './components/admin/pages/fono/fono.component';
import { FonoFormComponent } from './components/admin/pages/fono/fono-form/fono-form.component';
import { FonoDetalheComponent } from './components/admin/pages/fono/fono-detalhe/fono-detalhe.component';
import { FonoAdminComponent } from './components/admin/pages/fono/fono-admin/fono-admin.component';
import { ConsultarFonoComponent } from './components/admin/pages/fono/consultar-fono/consultar-fono.component';
import { ConsultarMeusFonosComponent } from './components/admin/pages/fono/consultar-meus-fonos/consultar-meus-fonos.component';
import { ConsultaComponent } from './components/admin/pages/paciente/consulta/consulta.component';
import { ConsultarMeusComponent } from './components/admin/pages/paciente/consultar-meus/consultar-meus.component';
import { PacienteEvolucaoComponent } from './components/admin/pages/paciente/paciente-evolucao/paciente-evolucao.component';
import { PacienteLaudoComponent } from './components/admin/pages/paciente/paciente-laudo/paciente-laudo.component';
import { PacienteFormComponent } from './components/admin/pages/paciente/paciente-form/paciente-form.component';
import { PacienteDetalheComponent } from './components/admin/pages/paciente/paciente-detalhe/paciente-detalhe.component';
import { JogosComponent } from './components/admin/pages/jogos/jogos.component';
import { ListaJogosComponent } from './components/admin/pages/jogos/lista-jogos/lista-jogos.component';
import { AgendaComponent } from './components/admin/pages/agenda/agenda.component';
import { ConsultaAgendaComponent } from './components/admin/pages/agenda/consulta-agenda/consulta-agenda.component';
import { CalendarioAgendaComponent } from './components/admin/pages/agenda/calendario-agenda/calendario-agenda.component';
import { PerfilComponent } from './components/admin/pages/perfil/perfil.component';
import { DashboardComponent } from './components/admin/pages/perfil/dashboard/dashboard.component';
import { MeusDadosComponent } from './components/admin/pages/perfil/meus-dados/meus-dados.component';
import { DashComponent } from './components/admin/pages/dash/dash.component';
import { PacienteSelecionarComponent } from './components/admin/pages/paciente/paciente-selecionar/paciente-selecionar.component';
import { AdminGuard } from './core/admin.guard';
import { FonoGuard } from './core/fono.guard';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: OnepageComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'admin-home',
        pathMatch: 'full'
      },
      {
        path: 'admin-home',
        component: AdminHomeComponent
      },
      {
        path: 'admin-programs',
        component: AdminProgramsComponent
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'index',
    redirectTo: 'admin',
    pathMatch: 'full'
  },


    {path: 'sistema', component: AdminComponent, children: [
        
       
        { path: 'user',children:[
            {path: 'atualizar',component:UserUpdateComponent, canActivate:[AdminGuard]},
            {path: 'admin',component:UserAdminComponent, canActivate:[AdminGuard]},
            {path: 'ver',component:UserViewComponent, canActivate:[AdminGuard]},

        ]},
        {path: 'fonoaudiologo', component: FonoComponent, children: [

            {path: 'novo', component: FonoFormComponent, canActivate: [FonoGuard]},
            {path: 'ver', component: FonoDetalheComponent, canActivate: [FonoGuard]},
            {path: 'admin', component: FonoAdminComponent, canActivate: [FonoGuard]},
            {path: 'consulta', component: ConsultarFonoComponent, canActivate: [FonoGuard]},
            {path: 'consultarMeusFonos', component: ConsultarMeusFonosComponent, canActivate: [FonoGuard]},
            // {path: ':id/editar', component: FonoFormComponent}
            //]},
            //{path: 'paciente', component: PacienteComponent, children: [
            {path: 'consultarPacientes', component: ConsultaComponent, canActivate: [FonoGuard]},
            {path: 'consultarMeus', component: ConsultarMeusComponent, canActivate: [FonoGuard, AdminGuard]},
            {path: 'evolucao/:id', component: PacienteEvolucaoComponent, canActivate: [FonoGuard]},
            {path: 'laudo/:id', component: PacienteLaudoComponent, canActivate: [FonoGuard]},
            {path: 'novo', component: PacienteFormComponent, canActivate: [FonoGuard]},
            {path: 'ver', component: PacienteDetalheComponent, canActivate: [FonoGuard]},
      // {path: ':id/editar', component: FonoFormComponent}
        ]},
        {path: 'jogos', component: JogosComponent, children: [
            {path: 'listaJogos', component: ListaJogosComponent, canActivate: [AuthGuard,AdminGuard]},
        ]},
        {path: 'agenda', component: AgendaComponent, children: [
            {path: 'consultaAgenda', component: ConsultaAgendaComponent, canActivate: [AuthGuard,AdminGuard]},
            {path: 'calendarioAgenda', component: CalendarioAgendaComponent, canActivate: [AuthGuard,AdminGuard]},
        ]},
        {path: 'perfil', component: PerfilComponent, children: [
            {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard,AdminGuard]},
            {path: 'meusDados', component: MeusDadosComponent, canActivate: [AuthGuard,AdminGuard]},
        ]},
        {path: 'dash', component: DashComponent},
            {path: 'video', component: PacienteSelecionarComponent, canActivate: [AuthGuard,AdminGuard]}
        ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
