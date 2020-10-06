import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent implements OnInit {
  displayedColumns : string[] = ['receiptNumber','patientName','action'];
  dataSource : any;
  data :any[] = [{receiptNumber:'2214',patientName:'Muzammil'},{receiptNumber:'5541',patientName:'Shaik'},{receiptNumber:'5541',patientName:'Shaik'},{receiptNumber:'5541',patientName:'Shaik'},{receiptNumber:'5541',patientName:'Shaik'},{receiptNumber:'5541',patientName:'Shaik'},{receiptNumber:'5541',patientName:'Shaik'},{receiptNumber:'5541',patientName:'Shaik'},{receiptNumber:'5541',patientName:'Shaik'},{receiptNumber:'5541',patientName:'Shaik'},{receiptNumber:'5541',patientName:'Shaik'}];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}
