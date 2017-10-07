import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Mapping data
import * as SoundboardMapping from '../../models/soundboard.mapping';

// Native
import { Media, MediaObject } from '@ionic-native/media';

@Component({
  selector: 'page-soundboard',
  templateUrl: 'soundboard.html'
})
export class SoundboardPage {

  private soundboardData: SoundboardMapping.SoundboardMap[];
  private file: MediaObject;

  constructor(public navCtrl: NavController, private media: Media) {
    this.soundboardData = SoundboardMapping.SoundboardMock;
  }

  public playSound(ressource: string) {
    if (this.file) {
      this.file.stop();
      this.file.release();
    }

    this.file = this.media.create('./assets/' + ressource);
    this.file.play();
  }

}
