import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { loadPlaylists, loadUsers, login, logout } from '../../store/playlist.actions'
import { selectAuthenticated, selectCurrentUser, selectLoginError, selectPlaylists } from '../../store/playlist.selectors'
import { combineLatest, map, Observable, startWith } from 'rxjs';
import { Playlist } from '../../models/playlist.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  search = new FormControl('');
  

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  playlists$!: Observable<Playlist[]>;
  authenticated$ = this.store.select(selectAuthenticated);
  currentUser$ = this.store.select(selectCurrentUser);
  loginError$ = this.store.select(selectLoginError);

  constructor(
    private store: Store,
  ) {}

  ngOnInit() {
    this.store.dispatch(loadUsers());
    this.store.dispatch(loadPlaylists());

    this.playlists$ = combineLatest([
      this.store.select(selectPlaylists),
      this.search.valueChanges.pipe(startWith(''))
    ]).pipe(
      map(([playlists, search]) =>
        playlists.filter(p =>
          p.name.toLowerCase().includes((search || '').toLowerCase())
        )
      )
    )
  }

  onLogin() {
    const username = this.loginForm.get('username')?.value || '';
    const password = this.loginForm.get('password')?.value || '';

    this.store.dispatch(login({ username: username, password: password }));
    this.loginForm.reset();
  }

  onLogout() {
    this.store.dispatch(logout());
  }
}