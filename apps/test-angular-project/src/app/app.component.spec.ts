/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppComponent } from './app.component';
import { TestBed } from '@angular/core/testing';
import '@hirez_io/jest-given';

describe('RecruiterDashboardPageComponent', () => {
  let componentUnderTest: AppComponent;

  Given(() => {
    TestBed.configureTestingModule({
      providers: [AppComponent],
    });

    componentUnderTest = TestBed.inject(AppComponent);
  });

  describe('INIT: ngOnInit', () => {
    Given(() => {
      // TODO - fix TypeError: jest.spyOn(...).mockReturnValue is not a function
      jest
        .spyOn(sessionStorage, 'getItem')
        .mockReturnValue(
          '{"selectedTabIx":1,"selectedRecruiterId":"FAKE_RECRUITER_ID"}'
        );
    });

    When(() => {
      componentUnderTest.ngOnInit();
    });

    Then(() => {
      expect(componentUnderTest.selectedTabIx).toEqual(1);
      expect(componentUnderTest.whichTab).toEqual(2);
      expect(componentUnderTest.selectedRecruiterId).toEqual(
        'FAKE_RECRUITER_ID'
      );
    });
  });
});
