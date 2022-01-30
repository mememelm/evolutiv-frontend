import { UsersState } from './../../../../redux/users/user.reducers';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketsState } from 'src/app/redux/tickets/ticket-reducer';
import { ControllerService } from './../../../../services/controller.service';
import { StateEnum } from '../../../../constants/shared/default-state-reducer';
import { GetAllTicketsAction } from './../../../../redux/tickets/ticket-actions';
import { map } from 'rxjs/operators';
import { GetAllUsersAction } from 'src/app/redux/users/user.actions';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  tickets$: Observable<TicketsState> | null = null
  users$: Observable<UsersState> | null = null
  readonly ticketsStateEnum = StateEnum

  constructor(private ctrl: ControllerService) { }
  
  ngOnInit(): void {
    this.ctrl.store.dispatch(new GetAllTicketsAction({}))
    this.tickets$ = this.ctrl.store.pipe(
      map((state) => {
        return state.ticketsState
      })
    )
    this.ctrl.store.dispatch(new GetAllUsersAction({}))
    this.users$ = this.ctrl.store.pipe(
      map((state) => {
        return state.userState
      })
    )
  }

}
