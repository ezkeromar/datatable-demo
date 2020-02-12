import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ExampleDataTableDatasource } from './example-data-table.datasource';
import { ExampleDataTableService } from './example-data-table.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-example-data-table',
  templateUrl: './example-data-table.component.html',
  styleUrls: ['./example-data-table.component.styl']
})
export class ExampleDataTableComponent implements OnInit {
  dataSource: ExampleDataTableDatasource;
  columns = [
    {
      key: 'firstname',
      value: 'First Name',
      width: '100px'
    },
    {
      key: 'lastname',
      value: 'Last Name',
      width: '100px'
    },
    {
      key: 'city',
      value: 'City',
      width: '100px'
    },
    {
      key: 'country',
      value: 'Country',
      width: '100px'
    },
    {
      key: 'poste',
      value: 'Poste',
      width: '120px'
    },
    {
      key: 'phone',
      value: 'Phone',
      width: '150px'
    },
    {
      key: 'website',
      value: 'Website',
      width: '100px'
    },
    {
      key: 'email',
      value: 'Email',
      width: '200px'
    },
    {
      key: 'actions',
      value: 'Actions',
      width: '60px'
    }
  ];
  actions = [
    {
      code: 'add',
      classe: 'add-class',
      icone: 'add',
      name: 'Add'
    },
    {
      code: 'delete',
      classe: 'delete-class',
      icone: 'delete',
      name: 'Delete'
    }
  ];
  constructor(private matSnackBar: MatSnackBar, private router: Router, private exampleDataTableService: ExampleDataTableService) {
    this.dataSource = new ExampleDataTableDatasource(this.exampleDataTableService);
  }

  ngOnInit() {
  }

  sendAction($event) {
    console.log($event[0]);
    this.matSnackBar.open($event[1].firstname, $event[0], {
      duration: 3000,
    });
  }

}
