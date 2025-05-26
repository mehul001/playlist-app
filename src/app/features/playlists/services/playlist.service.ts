import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Playlist } from '../models/playlist.model'
import { featuredPlaylists } from '../../../core/data/mock-database'

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  getPlaylists(): Observable<Playlist[]> {
    return of(featuredPlaylists.content)
  }
}