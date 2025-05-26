import { Component, Input } from '@angular/core';
import { Playlist } from '../../models/playlist.model';
import { Store } from '@ngrx/store';
import { selectAuthenticated } from '../../store/playlist.selectors';

@Component({
  selector: 'app-playlist-item',
  templateUrl: './playlist-item.component.html',
  styleUrls: ['./playlist-item.component.scss']
})
export class PlaylistItemComponent {
  @Input() playlist!: Playlist;

  authenticated$ = this.store.select(selectAuthenticated);

  constructor(private store: Store) { }
}