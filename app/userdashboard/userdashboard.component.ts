import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from 'node_modules 2/@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {


  constructor(private route: Router) { }

  user:string='';
  inHome:boolean=false;

  ngOnInit(): void {
    this.user = localStorage.getItem('name')!;
  }
  logout() {
    localStorage.setItem('headerToggel',"false");
    this.route.navigate(['/home']);
  }

}
