import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tests-grid',
  templateUrl: './tests-grid.component.html',
  styleUrls: ['./tests-grid.component.css']
})
export class TestsGridComponent implements OnInit {
  rowEditable = false;
  displayedColumns : string[] = ['sequence','profile','test_Category','test_Name','result','unit','range','amount'];
  testData : any[] = [
    {sequence:'1.0',profile:'Lipid'},{sequence:'2.0',profile:'Blood'},
    {sequence:'1.0',profile:'Lipid'},{sequence:'1.0',profile:'Lipid'},
    {sequence:'1.0',profile:'Lipid'}
  ];
  dataSource:any;
  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.testData)
  }
  rowClicked(rowData){
    console.log("row clicked "+JSON.stringify(rowData));
  }
  

}
