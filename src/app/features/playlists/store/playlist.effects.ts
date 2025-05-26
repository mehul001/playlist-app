import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { loadPlaylists, loadPlaylistsSuccess, loadUsers, loadUsersSuccess, login, loginFail, loginSuccess } from './playlist.actions'
import { map, tap } from 'rxjs/operators'
import { featuredPlaylists, users } from 'src/app/core/data/mock-database'
import { ToastrService } from 'ngx-toastr'

@Injectable()
export class PlaylistEffects {
  constructor(
    private actions$: Actions,
    private toastr: ToastrService
  ) {}

  loadPlaylists$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPlaylists),
      map(() => loadPlaylistsSuccess({ playlists: featuredPlaylists.content }))
    )
  )

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      map(() => loadUsersSuccess({ users: users }))
    )
  )

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      map ((action) => {
        const user = users.find(user => user.username === action.username && user.password === action.password);
        return user ? loginSuccess({ user }) : loginFail({ error: 'Invalid credentials' });
      })
    )
  );

  showLoginError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginFail),
      tap(({ error }) => {
        this.toastr.error(error, 'Login Failed', { 
          timeOut: 5000,
          // positionClass: 'toast-top-full-width'
        });
      })
    ),
    { dispatch: false }
  );

  clearToast$ = createEffect(() =>    
    this.actions$.pipe(
      ofType(loginSuccess),
      tap(() => {
        this.toastr.clear();
      })
    ),
    { dispatch: false }
  );
}