import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataService } from 'src/app/service/data.service';
import { PatientsItem } from './patients-datasource';
import Swal from 'sweetalert2';
import { PatientsDataSource } from './patients-datasource';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
})
export class PatientsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<PatientsItem>;
  
  dataSource:any;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'id',
    'name',
    'address',
    'phone',
    'age',
    'email',
    'gender',
    'actions'
  ];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataSource = new PatientsDataSource(this.dataService);
  }

  ngAfterViewInit(): void {

  }

  deletePatient(id:any){
    this.dataService.deletePatient(id).subscribe(res=>{
      Swal.fire('DELETE SUCCESFUL..!', '', 'success') 
      this.ngOnInit(); 
  });
  }
}
