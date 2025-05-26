import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { playlistsReducer } from './features/playlists/store/playlist.reducer';
import { PlaylistEffects } from './features/playlists/store/playlist.effects';
import { PlaylistsModule } from './features/playlists/playlists.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PlaylistsModule,
    
    StoreModule.forRoot({ playlists: playlistsReducer }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([PlaylistEffects]),
    ToastrModule.forRoot(),

    StoreDevtoolsModule.instrument(), // Used for Redux Dev Tool
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
