import { Component, OnInit } from '@angular/core';
import { SideNav } from 'src/app/others/model/sidenav/side-nav';
import { SideNavBody } from 'src/app/others/model/sidenav/side-nav-body';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  navigation: SideNav = new SideNav();

  isToggle: boolean;

  ngOnInit(): void {
    console.log('nav comp');
    this.isToggle = true;
    this.setNavData();
  }

  setNavData(){
    let navigationData: SideNavBody[] = [
      {
        imageUrl: 'dashboard',
        data: 'Dashboard',
        link: ''
      }, {
        imageUrl: 'spa',
        data: 'Aboutus',
        link: 'aboutus'
      }
    ];
    this.navigation.body = navigationData;
  }

}
