import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { provideMockStore } from '@ngrx/store/testing';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as PlaylistActions from '../../store/playlist.actions';
import { Store } from '@ngrx/store';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        BrowserAnimationsModule
      ],
      providers: [provideMockStore()] //lets test run without actual ngrx store
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should set the login form with empty values', () => {
    expect(component.loginForm.value).toEqual({ username: '', password: '' });
  });

  it('dispatch login action', () => {
    const store = TestBed.inject(Store);
    const loginSpy = spyOn(store, 'dispatch');

    component.loginForm.setValue({ username: 'testuser', password: 'testpass' });
    component.onLogin();

    // checks the login action is dispatched with the correct payload obj
    expect(loginSpy).toHaveBeenCalledWith(PlaylistActions.login({ username: 'testuser', password: 'testpass' }));
  })

  it('dispatch logout', () => {
    const store = TestBed.inject(Store);
    const loginSpy = spyOn(store, 'dispatch');
    component.onLogout();

    expect(loginSpy).toHaveBeenCalledWith(PlaylistActions.logout());
  })

  it('playlist$ defined after ngOnInit', () => {
    component.ngOnInit();
    expect(component.playlists$).toBeTruthy();
  });
});