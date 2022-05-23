import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jest-config-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  selectedRecruiterId = '';

  selectedTabIx = 0;

  recruiterDashboardTabEnum = RecruiterDashboardTabEnum;

  title = 'test-angular-project';

  whichTab: number = RecruiterDashboardTabEnum.InProcess;

  ngOnInit() {
    const dataFromStorage = sessionStorage.getItem('RecruiterDashboardData');

    if (dataFromStorage) {
      const data = JSON.parse(dataFromStorage);
      if (data.selectedTabIx) {
        this.selectedTabIx = data.selectedTabIx;
        this.whichTab = this.selectedTabIx + 1;
      }

      if (data.selectedRecruiterId) {
        this.selectedRecruiterId = data.selectedRecruiterId;
      }
    }
  }
}

export enum RecruiterDashboardTabEnum {
  InProcess = 1,
  Dispatched = 2,
  Workload = 3,
  ByJob = 4,
  Scorecard = 5,
  Interest_Submitted = 6,
  RecruiterDashboard = 7,
}
