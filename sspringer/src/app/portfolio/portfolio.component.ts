import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  projects: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('assets/projects.json').subscribe(data => {
      this.projects = data;
    },
    err => {
      console.log('Error no data.');
    });
  }

}
