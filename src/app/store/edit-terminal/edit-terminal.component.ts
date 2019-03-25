import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-terminal',
  templateUrl: './edit-terminal.component.html',
  styleUrls: ['./edit-terminal.component.scss']
})
export class EditTerminalComponent implements OnInit {
  validateForm;

  storeList = [
    { storeName: '门店1', storeNumber: '1' },
    { storeName: '门店2', storeNumber: '2' },
    { storeName: '门店3', storeNumber: '3' },
    { storeName: '门店4', storeNumber: '4' },
    { storeName: '门店5', storeNumber: '5' },
    { storeName: '门店6', storeNumber: '6' },
    { storeName: '门店7', storeNumber: '7' },
    { storeName: '门店8', storeNumber: '8' }
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      terminalNumber: [null, [Validators.required, Validators.maxLength(10), Validators.minLength(3)]],
      invitationCode: [null, [Validators.required]],
      staffName: [null, [Validators.required, Validators.maxLength(10), Validators.minLength(3)]],
      store: [null, [Validators.required, Validators.maxLength(6), Validators.minLength(2)]],
      password: [null, [Validators.required, Validators.maxLength(13), Validators.minLength(13)]]
    });
  }

}
