import { TestBed } from '@angular/core/testing';

import { SearchGithubUserService } from './search-github-user.service';

describe('SearchGithubUserService', () => {
  let service: SearchGithubUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchGithubUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
