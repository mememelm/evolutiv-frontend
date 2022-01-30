import { Store } from '@ngrx/store';
import { BackendService } from './backend.service';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  constructor(
    public api: BackendService,
    public store: Store<any>,
    public fb: FormBuilder,
    public modal: MatDialog
    ) { }
}
