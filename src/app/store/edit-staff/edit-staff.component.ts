import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.scss']
})
export class EditStaffComponent implements OnInit {

  validateForm: FormGroup;

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

  roleList = [
    { roleName: '系统管理员', roleNumber: '1' },
    { roleName: '老板', roleNumber: '1' },
    { roleName: '店长', roleNumber: '1' },
    { roleName: '财务', roleNumber: '1' },
    { roleName: '运营经理', roleNumber: '1' },
    { roleName: '仓库管理员', roleNumber: '1' },
    { roleName: '促销管理员', roleNumber: '1' },
    { roleName: '收银操作员', roleNumber: '1' }
  ];

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {
    this.validateForm = this.fb.group({
      staffNumber: [null, [Validators.required, Validators.maxLength(10), Validators.minLength(3)]],
      staffName: [null, [Validators.required]],
      staffTel: [null, [Validators.required, Validators.maxLength(10), Validators.minLength(3)]],
      contactTel: [null, [Validators.required, Validators.maxLength(13), Validators.minLength(13)]],
      staffPassword: [null, [Validators.required, Validators.maxLength(6), Validators.minLength(2)]],
      store: [null, [Validators.required]],
      roleName: [null, [Validators.required]]
    });
  }

  ngOnInit() {
  }

  cancelClick() {
    this.router.navigate(['/home/store/staff-account']);
  }

}
