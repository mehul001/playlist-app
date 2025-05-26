import { createAction, props } from '@ngrx/store'
import { Playlist } from '../models/playlist.model'
import { User } from '../models/user.model'

export const loadPlaylists = createAction('[Playlist] Load Playlists')

export const loadPlaylistsSuccess = createAction('[Playlist] Load Playlists Success', 
  props<{ playlists: Playlist[] }>()
)

export const loadUsers = createAction('[Playlist] Load Users')

export const loadUsersSuccess = createAction('[Playlist] Load Users Success', 
  props<{ users: User[] }>()
)

export const login = createAction('[Auth] Login',
  props<{ username: string, password: string }>()
);

export const loginSuccess = createAction('[Auth] Login Success', 
  props<{ user: User }>()
);

export const loginFail = createAction('[Auth] Login Fail',
  props<{ error?: string }>()
);

export const logout = createAction('[Auth] Logout');