import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


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
    private router: Router
  ) { }

  ngOnInit(): void {


  }


  login(): void {
    console.log(this.username + ", " + this.password);
    this.router.navigate(['/pages']);
  }

}
