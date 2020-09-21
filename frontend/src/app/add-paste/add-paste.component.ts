import { Component} from '@angular/core';
import { Subscription } from 'rxjs';
import { RestService } from '../services/rest.service';
import {Paste} from '../entities/paste'
@Component({
  selector: 'app-add-paste',
  templateUrl: './add-paste.component.html',
  styleUrls: ['./add-paste.component.sass']
})
export class AddPasteComponent{
  getPasteSubscription: Subscription
  constructor(private api: RestService) { 
    this.getPasteSubscription = this.api.getPaste('3b3d613679d1c98').subscribe((paste: Paste) => {
      alert(paste.paste)
    })
  }


  ngOnDestroy() {
    if(this.getPasteSubscription) {
      this.getPasteSubscription.unsubscribe()
    }
  }
}
