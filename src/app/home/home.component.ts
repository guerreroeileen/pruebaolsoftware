import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  username: string;
  password: string;

  constructor(
    public fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    

  }


  login(): void {
console.log(this.username +", " + this.password)
  }

}
