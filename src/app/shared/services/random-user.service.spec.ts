import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { RandomUserService } from './random-user.service';
import { RandomUser } from '../models/random-user.model';
import { HttpClient } from '@angular/common/http';

describe('RandomUserService', () => {
  let service: RandomUserService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RandomUserService],
    });
    service = TestBed.inject(RandomUserService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get a random user', () => {
    const mockResponse: RandomUser[] = [
      {
        email: 'test@example.com',
        firstName: 'John',
        gender: 'male',
        lastName: 'Doe',
        timezone: 'UTC',
      },
    ];

    service.getRandomUser().subscribe((user: RandomUser) => {
      expect(user.email).toEqual('test@example.com');
      expect(user.firstName).toEqual('John');
      expect(user.gender).toEqual('male');
      expect(user.lastName).toEqual('Doe');
      expect(user.timezone).toEqual('UTC');
    });

    const req: TestRequest = httpTestingController.expectOne(service['randomUserURl']);
    expect(req.request.method).toEqual('GET');
    req.flush({ results: mockResponse });
  });
});
