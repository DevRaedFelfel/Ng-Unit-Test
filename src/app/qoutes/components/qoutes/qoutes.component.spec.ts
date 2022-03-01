import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { QoutesComponent } from './qoutes.component';
import { QouteService } from '../../service/qoute.service'
import { By } from '@angular/platform-browser';
import { QouteModel } from '../../model/QouteModel';

describe('QoutesComponent', () => {
  let component: QoutesComponent;
  let fixture: ComponentFixture<QoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ QoutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QoutesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should use the quoteList from the service", () => {
    const quoteService = fixture.debugElement.injector.get(QouteService);
    fixture.detectChanges();
    expect(quoteService.getQoute()).toEqual(component.qouteList);
  });

  it("should create a new post", () => {
    component.qouteText = "I love this test";
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.innerHTML).toContain("I love this test");
  });

  it("should disable the button when textArea is empty", () => {
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
    expect(button.nativeElement.disabled).toBeTruthy();
  });

  it("should enable button when textArea is not empty", () => {
    component.qouteText = "I love this test";
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
    expect(button.nativeElement.disabled).toBeFalsy();
  });

  it("should remove post upon card click", () => {
    component.qouteText = "This is a fresh post";
    fixture.detectChanges();

    fixture.debugElement
      .query(By.css(".row"))
      .query(By.css(".card"))
      .triggerEventHandler("click", null);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.innerHTML).toContain("This is a fresh post");
  });

  it("should fetch data asynchronously", async () => {
    const fakedFetchedList = [
      new QouteModel("I love unit testing", "Tues 3, 2022")
    ];
    const quoteService = fixture.debugElement.injector.get(QouteService);

    let spy = spyOn(quoteService, "fetchQoutesFromServer").and.returnValue(
      Promise.resolve(fakedFetchedList)
    );

    component.ngOnInit();
    
    fixture.whenStable().then(() => {
      expect(component.fetchedList).toBe(fakedFetchedList);
    });
  });
  
});
