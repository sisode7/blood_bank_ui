import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  team = [
    {
      name: 'Vaishnavi Patil',
      role: 'Frontend Overlord & Chaos CEO',
      photo: '',
      description: 'Brilliant with the UI, bossy without a crown, melts down but always delivers.',
    },
    {
      name: 'Vagisha Sharma',
      role: 'Silent MVP & Diagram Master',
      photo: '',
      description: 'Camera shy, brain loud. Quietly slays with her sharp logic and impeccable diagrams.',
    },
    {
      name: 'Vaishnavi Tathe',
      role: 'Chief Vibe Stabilizer & Theory Expert',
      photo: '',
      description: 'Tech? Meh. Emotional support? Immaculate. Keeps Patil from combusting and handles all the theory stuff.',
    }
  ];
}

