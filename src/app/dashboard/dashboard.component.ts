import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

export interface UserData {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email'];
  dataSource!: MatTableDataSource<UserData>;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<UserData>([
      { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
      { id: 2, name: 'Jane Smith', email: 'janesmith@example.com' },
      { id: 3, name: 'Robert Johnson', email: 'robertjohnson@example.com' },
      { id: 4, name: 'Emily Davis', email: 'emilydavis@example.com' },
      { id: 5, name: 'Michael Wilson', email: 'michaelwilson@example.com' },
    ]);
  }
}
