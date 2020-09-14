import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Paste } from '../entities/paste';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-add-paste',
  templateUrl: './add-paste.component.html',
  styleUrls: ['./add-paste.component.sass']
})
export class AddPasteComponent {
  getPasteSubscription: Subscription
  constructor(private api: RestService) {
    this.getPasteSubscription = this.api.getPaste('2bb8deb8f611558').subscribe((paste: Paste) => {
      alert(paste.paste)
    })
   }

  ngOnDestroy() {
    if(this.getPasteSubscription) {
      this.getPasteSubscription.unsubscribe()
    }
  }

}
