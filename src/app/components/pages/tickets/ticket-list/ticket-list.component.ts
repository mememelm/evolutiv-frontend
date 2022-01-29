
import { Component, OnInit } from '@angular/core';
import { Ticket } from './../../../../../interfaces/ticket.interface';
import { User } from './../../../../../interfaces/user.interface';
import { Observable } from 'rxjs';
import { BackendService } from './../../../../services/backend.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  readonly users$: Observable<User[]> = this.backendService.users();
  readonly tickets$: Observable<Ticket[]> = this.backendService.tickets();

  constructor(private readonly backendService: BackendService) { }

  ngOnInit(): void {
  }

}
