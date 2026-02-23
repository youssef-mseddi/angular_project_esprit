import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent {
  email = new FormControl('');
  pwd = new FormControl('');

  UserForm = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(3)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    pwd: new FormControl('',[Validators.required,Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')]), // Minimum 8 characters, at least one letter and one number
    phone: new FormControl('',[Validators.required, Validators.pattern('^\\+?[1-9]\\d{1,14}$')]), // E.164 international phone number format
    address : new FormControl('',[Validators.required, Validators.minLength(10)]),
  })

  save(){
  console.log(this.email);
  console.log(this.pwd);
  }
}
