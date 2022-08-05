import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(null,[Validators.required]),
    password: new FormControl(null,Validators.required),
});

  constructor() { }

  ngOnInit(): void {
  }

}
