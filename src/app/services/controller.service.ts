import { Store } from '@ngrx/store';
import { BackendService } from './backend.service';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  constructor(
    public api: BackendService,
    public store: Store<any>,
    public fb: FormBuilder
    ) { }
}
