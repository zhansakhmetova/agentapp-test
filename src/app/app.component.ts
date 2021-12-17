import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ConverterService} from './converter.service';

interface Customer {
  distance: number;
  weight: number;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  formGroup: FormGroup;
  title = 'test-agentapp';
  customerInfo: Customer = {
    distance: null,
    weight: null,
    age: null
  };
  totalArr: any = [];


  constructor(private converter: ConverterService) {
  }


  ngOnInit() {
    this.formGroup = new FormGroup({
      distance: new FormControl(null, [Validators.required, Validators.maxLength(5), Validators.minLength(1)]),
      age: new FormControl(null, [Validators.required]),
      weight: new FormControl(null, [Validators.required, Validators.maxLength(3)])
    });
  }


  convert(distance, age, weight) {
    if (this.formGroup.valid) {
      this.totalArr = this.converter.calculateTariffs(distance, age, weight);
    }
  }

}

