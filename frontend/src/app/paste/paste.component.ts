import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Subscription } from 'rxjs';
import { Paste } from '../entities/paste';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paste',
  templateUrl: './paste.component.html',
  styleUrls: ['./paste.component.scss']
})
export class PasteComponent implements OnInit {
  pasteSubscription: Subscription;
  paste: Paste = new Paste(null, null, null, null, null, null)
  error: String
  paramsSubscription: Subscription

  constructor(private api: RestService, private route: ActivatedRoute) {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.pasteSubscription = this.api.getPaste(params['hash']).subscribe(receivedPaste => {
        if (!receivedPaste.hash) {
          this.setError()
        } else {
          this.paste = receivedPaste
        }
      })
    })
  }

  ngOnInit(): void {
  }

  setError(): void {
    this.error = 'Invalid url.' //redirect to 404
  }
  ngOnDestroy() {
    if(this.pasteSubscription) {
      this.pasteSubscription.unsubscribe()
    }

    if(this.paramsSubscription) {
      this.paramsSubscription.unsubscribe()
    }
  }
}
