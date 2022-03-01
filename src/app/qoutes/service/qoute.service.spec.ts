import { TestBed } from '@angular/core/testing';

import { QouteService } from './qoute.service';

describe('QouteService', () => {
  let service: QouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /*
  */

  // it("should create a post in an array", () => {
  //   const qouteText = "This is my first post";
  //   service.addNewQoute(qouteText);
  //   expect(service.qouteList.length).toBeGreaterThanOrEqual(1);
  // });

  // it("should remove a created post from the array of posts", () => {
  //   service.addNewQoute("This is my first post");
  //   service.removeQoute(0);
  //   expect(service.qouteList.length).toBeLessThan(1);
  // });

});
