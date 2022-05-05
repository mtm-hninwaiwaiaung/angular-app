import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Student } from '../../interfaces/interface';

@Component({
  selector: 'app-interface-example',
  templateUrl: './interface-example.component.html',
  styleUrls: ['./interface-example.component.scss']
})
export class InterfaceExampleComponent implements OnInit {

  studentList: Student[] = [];
  displayedColumns = ['id', 'name', 'email', 'age', 'phNumber', 'hobby'];
  dataSource: any = [];

  constructor() { }

  ngOnInit(): void {
    this.studentList = [
      { id: 1, name: 'Kyaw Kyaw', email: 'kyawkyaw@gmail.com', age: 24, hobby: this.changeArrayToString(['swimming', 'reading']) },
      { id: 2, name: 'Aye Aye', email: 'ayeaye@gmail.com', hobby: this.changeArrayToString(['cooking', 'eating']) },
      { id: 3, name: 'Tun Tun', email: 'tuntun@gmail.com', age: 20, phNumber: '+959754214896', hobby: this.changeArrayToString(['singing', 'dancing']) }
    ];
    this.dataSource = new MatTableDataSource<Student>(this.studentList);
  }

  changeArrayToString(paramArr: string[]): string {
    return paramArr.map(eachHobby => eachHobby).join(',');
  }
}
