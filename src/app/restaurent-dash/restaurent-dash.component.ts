import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { RestaurentData } from './restaurent-dash.model';

@Component({
  selector: 'app-restaurent-dash',
  templateUrl: './restaurent-dash.component.html',
  styleUrls: ['./restaurent-dash.component.css'],
})
export class RestaurentDashComponent implements OnInit {
  formValue!: FormGroup;
  restaurentModelObj: RestaurentData = new RestaurentData();
  allRestaurantData: any;
  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services: [''],
    });

    this.getAllData();
  }

  // Now Subscribing Our Data which is maped via Services
  addRestaurant() {
    this.restaurentModelObj.name = this.formValue.value.name;
    this.restaurentModelObj.email = this.formValue.value.email;
    this.restaurentModelObj.mobile = this.formValue.value.mobile;
    this.restaurentModelObj.address = this.formValue.value.address;
    this.restaurentModelObj.services = this.formValue.value.services;

    this.api.postRestaurent(this.restaurentModelObj).subscribe(
      (res) => {
        console.log(res);
        alert('Restaurant Records Added Successfully.');
        // CLear fill form data
        let ref = document.getElementById('clear');
        ref?.click();

        this.formValue.reset();
        this.getAllData(); // When you post any data
      },
      (err) => {
        alert('Something is wrong here.');
      }
    );
  }

  // Get All Data
  getAllData() {
    this.api.getRestaurent().subscribe((res) => {
      this.allRestaurantData = res;
    });
  }

  // Delete Records
  deleteRestaurent(data: any) {
    this.api.deleteRestaurent().subscribe((res) => {
      alert('Records Deleted Successfully');
      this.getAllData(); // quick refresh data
    });
  }
}
