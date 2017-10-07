import { Component } from '@angular/core';

import { SoundboardPage } from '../soundboard/soundboard';
import { StreamingPage } from '../streaming/streaming';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SoundboardPage;
  tab2Root = StreamingPage;

  constructor() {

  }
}
