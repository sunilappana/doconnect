import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() links = new Array<string>();
  @Input() inHome:boolean=false;
  headerToggel:boolean= false;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  // login(){
  //   this.router.navigate
  // }

  logout() {
    localStorage.setItem('headerToggel',"false");
    this.route.navigate(['/home']);
  }

  // headerToggel:String = localStorage.getItem('headerToggel')!;

}
