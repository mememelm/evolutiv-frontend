import { TicketsState } from 'src/app/redux/tickets/ticket-reducer';
import { Observable } from 'rxjs';
import { Ticket } from '../../../../constants/models/ticket.interface';
import { ControllerService } from './../../../../services/controller.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ticket-add',
  templateUrl: './ticket-add.component.html',
  styleUrls: ['./ticket-add.component.css']
})
export class TicketAddComponent implements OnInit {

  ticketForm: FormGroup
  tickets$: Observable<TicketsState> | null = null

  constructor(
    public dialogRef: MatDialogRef<TicketAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ticket,
    private ctrl: ControllerService
  ) { }

  ngOnInit(): void {
    this.ticketForm = this.ctrl.fb.group({
      description: ["", Validators.required]
    })
  }

  closeModal(): void {
    this.dialogRef.close()
  }

  addTicket(ticket: Ticket) {
    
  }

}
