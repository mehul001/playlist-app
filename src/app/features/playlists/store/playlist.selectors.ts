import { createFeatureSelector, createSelector } from '@ngrx/store'
import { PlaylistsState } from './playlist.reducer'

export const selectPlaylistsState = createFeatureSelector<PlaylistsState>('playlists')

export const selectPlaylists = createSelector(
  selectPlaylistsState,
  (state: PlaylistsState) => state.playlists
)

export const selectUsers = createSelector(
  selectPlaylistsState,
  (state: PlaylistsState) => state.users
)

export const selectAuthenticated = createSelector(
  selectPlaylistsState,
  (state: PlaylistsState) => state.authenticated
);

export const selectLoginError = createSelector(
  selectPlaylistsState,
  (state: PlaylistsState) => state.loginError
);

export const selectCurrentUser = createSelector(
  selectPlaylistsState,
  (state: PlaylistsState) => state.currentUser
);