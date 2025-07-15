import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faVk, faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-tasty-pastries',
  imports: [FontAwesomeModule],
  templateUrl: './tasty-pastries.html',
  styleUrl: './tasty-pastries.scss'
})
export class TastyPastries {
  faVk = faVk;
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
}
