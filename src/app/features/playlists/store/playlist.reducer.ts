import { createReducer, on } from '@ngrx/store'
import { loadPlaylistsSuccess, loadUsersSuccess, loginFail, loginSuccess, logout } from './playlist.actions'
import { Playlist } from '../models/playlist.model'
import { User } from '../models/user.model'

export interface PlaylistsState {
  playlists: Playlist[],
  users: User[],
  authenticated?: boolean,
  loginError?: string,
  currentUser?: User
}

const initialState: PlaylistsState = {
  playlists: [],
  users: [],
  authenticated: false,
  loginError: undefined,
  currentUser: undefined
}

export const playlistsReducer = createReducer(
  initialState,
  on(loadPlaylistsSuccess, (state, { playlists }) => ({ ...state, playlists })),

  on(loadUsersSuccess, (state, { users }) => ({ ...state, users })),

  on(loginSuccess, (state, { user }) => ({ ...state, currentUser: user, loginError: undefined, authenticated: true })),

  on(loginFail, (state, { error }) => ({ ...state, currentUser: undefined, loginError: error, authenticated: false })),

  on(logout, state => ({ ...state, currentUser: undefined, authenticated: false }))
)
