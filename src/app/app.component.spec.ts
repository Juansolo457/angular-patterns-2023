import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule],
    })
  );

  it('should create the app', () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  describe('ngOnInit', (): void => {
    it('should initialize the component', () => {
      // Arrange
      const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
      const app: AppComponent = fixture.componentInstance;
      app.vm = undefined;

      // Act
      app.ngOnInit();

      // Assert
      expect(app.vm).toEqual({
        formGroup: undefined,
        guid: '123-456-8DDD',
        isActive: true,
        name: 'John',
        ordinal: 12,
      });
    });
  });
});
