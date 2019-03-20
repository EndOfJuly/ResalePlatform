import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.scss']
})
export class EditStoreComponent implements OnInit {

  validateForm: FormGroup;
  province: string;

  regions = [{
    value: 'zhejiang',
    label: '浙江',
    children: [{
      value: 'hangzhou',
      label: '杭州',
      children: [{
        value: 'xihu',
        label: '西湖',
        isLeaf: true
      }]
    }, {
      value: 'ningbo',
      label: '宁波',
      isLeaf: true
    }]
  }, {
    value: 'jiangsu',
    label: '江苏',
    children: [{
      value: 'nanjing',
      label: '南京',
      children: [{
        value: 'zhonghuamen',
        label: '玄武湖',
        isLeaf: true
      }]
    }]
  }];

  values: any[] | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      storeName: [null, [Validators.required, Validators.maxLength(10), Validators.minLength(3)]],
      region: [null, [Validators.required]],
      storeAddress: [null, [Validators.required, Validators.maxLength(10), Validators.minLength(3)]],
      storeContact: [null, [Validators.required, Validators.maxLength(6), Validators.minLength(2)]],
      contactTel: [null, [Validators.required, Validators.maxLength(13), Validators.minLength(13)]]
    });
  }

  onChanges(values: any): void {
    console.log(values, this.values);
  }



  cancelClick() {
    this.router.navigate(['/home/store/store-manage']);
  }

}
