import { TestBed } from '@angular/core/testing';

import { EditBtnEventService } from './edit-btn-event.service';

describe('EditBtnEventService', () => {
  let service: EditBtnEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditBtnEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
