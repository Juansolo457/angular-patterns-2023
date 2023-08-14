import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeDefined();
  });

  it(`should have as title 'angular-in-app-styleguide'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-in-app-styleguide');
  });

  describe('ngOnInit', (): void => {
    it('should initialize the component', () => {
      // Arrange
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      app.vm = undefined;

      // Act
      app.ngOnInit();

      // Assert
      expect(app.vm).toEqual({
        name: 'John',
        guid: '123-456-8DDD',
        isActive: true,
        ordinal: 12,
      });
    });
  });
});
