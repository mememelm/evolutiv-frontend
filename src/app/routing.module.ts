import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketListComponent } from './components/pages/tickets/ticket-list/ticket-list.component';
import { TicketDetailComponent } from './components/pages/tickets/ticket-detail/ticket-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'ticket-list', pathMatch: 'full' },
  { path: 'ticket-list', component: TicketListComponent },
  { path: 'ticket-detail', component: TicketDetailComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
