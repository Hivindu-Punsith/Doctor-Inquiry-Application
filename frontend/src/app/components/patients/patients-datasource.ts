import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { DataService } from 'src/app/service/data.service';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject } from 'rxjs';

// TODO: Replace this with your own data model type
export interface PatientsItem {
  id: string;
  name: string;
  address: string;
  phone: number;
  age: string;
  email: string;
  gender: string;
}

// TODO: replace this with real data from your application
const data: PatientsItem[] = [];

/**
 * Data source for the Patients view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class PatientsDataSource extends DataSource<PatientsItem> {
  data: PatientsItem[] = data;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor(private dataService: DataService) {
    super();
  }

  public patientDataStream = new BehaviorSubject([]);
  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<PatientsItem[]> {
    return this.patientDataStream.asObservable();
  }

  disconnect(): void {
    this.patientDataStream.complete();
  }
}
