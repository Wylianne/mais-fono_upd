import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContentComponent } from './components/admin/content/content.component';
import { ControlSidebarComponent } from './components/admin/control-sidebar/control-sidebar.component';
import { FooterComponent } from './components/admin/footer/footer.component';
import { HeaderComponent } from './components/admin/header/header.component';
import { LeftSideComponent } from './components/admin/left-side/left-side.component';

import { AdminHomeComponent } from './components/admin/pages/admin-home/admin-home.component';
import { AdminProgramsComponent } from './components/admin/pages/admin-programs/admin-programs.component';

import { LoginComponent } from './components/login/login.component';
import { OnepageComponent } from './components/onepage/onepage.component';
import { CoreModule } from './core/core.module';
import { UserModule } from './components/admin/pages/user/user.module';
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
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ContentComponent,
    ControlSidebarComponent,
    FooterComponent,
    HeaderComponent,
    LeftSideComponent,
    AdminHomeComponent,
    AdminProgramsComponent,
    LoginComponent,
    OnepageComponent,
    FonoComponent,
    FonoFormComponent,
    FonoDetalheComponent,
    FonoAdminComponent,
    ConsultarFonoComponent,
    ConsultarMeusFonosComponent,
    ConsultaComponent,
    ConsultarMeusComponent,
    PacienteEvolucaoComponent,
    PacienteLaudoComponent,
    PacienteFormComponent,
    PacienteDetalheComponent,
    JogosComponent,
    ListaJogosComponent,
    AgendaComponent,
    ConsultaAgendaComponent,
    CalendarioAgendaComponent,
    PerfilComponent,
    DashboardComponent,
    MeusDadosComponent,
    DashComponent,
    PacienteSelecionarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    CoreModule, 
    UserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
