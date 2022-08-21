import { TestBed } from '@angular/core/testing';

import { FileupService } from './fileup.service';

describe('FileupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileupService = TestBed.get(FileupService);
    expect(service).toBeTruthy();
  });
});
