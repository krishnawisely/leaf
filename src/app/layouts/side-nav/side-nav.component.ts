import { Component, OnInit, Input } from '@angular/core';
import { SideNav } from 'src/app/others/model/sidenav/side-nav';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor() { }

  @Input() navData: SideNav;

  ngOnInit(): void {
    console.log("sidenav=>"+JSON.stringify(this.navData));
  }

}
