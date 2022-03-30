import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  hide = true;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  nameFormControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);

  constructor() { }

  ngOnInit(): void {
  }

}
