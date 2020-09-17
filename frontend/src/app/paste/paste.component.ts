import { Component} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Paste } from '../entities/paste';
import { RestService } from '../services/rest.service';
import {Clipboard} from '@angular/cdk/clipboard'
@Component({
  selector: 'app-paste',
  templateUrl: './paste.component.html',
  styleUrls: ['./paste.component.sass']
})
export class PasteComponent {
  pasteSubscription: Subscription
  paste: Paste = {hash: null, paste: null}
  paramsSubscription: Subscription

  constructor(private api: RestService, private route: ActivatedRoute, private _snackBar: MatSnackBar, private clipboard: Clipboard, private router: Router) {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.pasteSubscription = this.api.getPaste(params['hash']).subscribe(receivedPaste => {
        if (receivedPaste.hash) {
          this.paste = receivedPaste
        } else {
          this.redirectTo404()
        }
      })
    })
   }

   copyPaste(): void {
     this.clipboard.copy(this.paste.paste.toString())
     this._snackBar.open('Copied!', 'Ok', {
       duration: 2000
     })
   }

   redirectTo404(): void {
     this.router.navigate(['404'])
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
