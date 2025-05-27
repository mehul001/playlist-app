import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as PlaylistActions from '../../store/playlist.actions';
import { Store } from '@ngrx/store';
import { PlaylistItemComponent } from './playlist-item.component';

describe('PlaylistItemComponent', () => {
  let component: PlaylistItemComponent;
  let fixture: ComponentFixture<PlaylistItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistItemComponent ],
      imports: [
        MatCardModule,
        MatIconModule,
        MatTooltipModule,
        BrowserAnimationsModule
      ],
      providers: [provideMockStore()] //lets test run without actual ngrx store
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistItemComponent);
    component = fixture.componentInstance;

    // dummy data for test
    component.playlist = {
      id: '1',
      name: 'Test Playlist',
      curator_name: 'Test Name',
      url: 'https://example.com',
      artwork: 'https://example.com/image.jpg',
      kind: 'music',
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display playlist name', () => {
    component.playlist.name = 'My Playlist';
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('My Playlist');
  })
});