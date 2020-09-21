import { Component } from '@angular/core';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-add-paste',
  templateUrl: './add-paste.component.html',
  styleUrls: ['./add-paste.component.sass']
})
export class AddPasteComponent {
  constructor(private api: RestService) {
  }
}
