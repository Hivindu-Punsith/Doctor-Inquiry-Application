import { DataSource } from '@angular/cdk/collections';
import { DataService } from 'src/app/service/data.service';
import { Observable, BehaviorSubject } from 'rxjs';

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

export class PatientsDataSource extends DataSource<PatientsItem> {
  data: any;
  patients: any;

  constructor(private dataService: DataService) {
    super();
  }

  patientDataStream: BehaviorSubject<PatientsItem[]> = new BehaviorSubject<PatientsItem[]>([]);

  connect(): Observable<PatientsItem[]> {
    //console.log('connected');
    if (!this.patientDataStream.isStopped)
      this.dataService.getPatients().subscribe((res: any) => {
        this.patientDataStream.next(res);
      });

    return this.patientDataStream.asObservable();
  }

  disconnect(): void {
    this.patientDataStream.complete();
  }
}
