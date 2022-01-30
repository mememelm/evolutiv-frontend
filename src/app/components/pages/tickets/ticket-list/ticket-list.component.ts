import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketsState } from 'src/app/redux/tickets/ticket-reducer';

import { ControllerService } from './../../../../services/controller.service';
import { TicketsStateEnum } from './../../../../redux/tickets/ticket-reducer';
import { GetAllTicketsAction } from './../../../../redux/tickets/ticket-actions';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  tickets$: Observable<TicketsState> | null = null
  readonly ticketsStateEnum = TicketsStateEnum

  constructor(private ctrl: ControllerService) { }
  
  ngOnInit(): void {
    this.ctrl.store.dispatch(new GetAllTicketsAction({}))
    this.tickets$ = this.ctrl.store.pipe(
      map((state) => {
        return state.ticketsState
      })
    )
  }

}
