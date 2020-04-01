import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'date-component';
  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      items: this.fb.array([])
    });

    const formGroup: FormGroup = new FormGroup({});

    let formControl1: FormControl = new FormControl('');
    let formControl2: FormControl = new FormControl('');
    let formControl3: FormControl = new FormControl('');

    formGroup.addControl('Month', formControl1);
    formGroup.addControl('Day', formControl2);
    formGroup.addControl('Year', formControl3);

    (<FormArray>this.form.get('items')).push(formGroup);
  }

  groupData() {
    return (<FormArray>this.form.controls.items).controls;
  }

  somethingHappened() {
    console.log('the onChange event fired!');
  }
}
