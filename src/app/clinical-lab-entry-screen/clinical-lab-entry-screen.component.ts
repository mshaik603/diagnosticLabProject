import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-clinical-lab-entry-screen',
  templateUrl: './clinical-lab-entry-screen.component.html',
  styleUrls: ['./clinical-lab-entry-screen.component.css']
})
export class ClinicalLabEntryScreenComponent implements OnInit {
  clinicalForm : any;
  titleS :any[] = ['Mr.','Mrs.'];
  constructor(private fb:FormBuilder) { }

  public get title(){
    return this.clinicalForm.get('patient.title');
  }

  ngOnInit(): void {
    this.formLoader();
  }
  changeTstatus(e) {
    this.title.setValue(e.target.value, {
      onlySelf: true
    })
}
  formLoader(){
    this.clinicalForm = this.fb.group({
      patient : this.fb.group({
        pName : [''],
        title : [''],
        pAge : [''],
        pSex :['']
      }),
      refByDoc : [''],
      note : [''],
      method : [''],
      date : [''],
      time : [''],
      serialNo : [''],
      receiptNo : ['']
      
    })
  }

  
}
