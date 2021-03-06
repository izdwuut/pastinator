import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Subscription } from 'rxjs';
import { Paste } from '../entities/paste';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { cpuUsage } from 'process';

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

  constructor(private api: RestService, private route: ActivatedRoute, private router: Router, private _snackBar: MatSnackBar) {
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

  ngOnInit(): void {
  }

  copyPaste(): void {
    
    this._snackBar.open('Copied!', 'Ok', {
      duration: 2000,
    });
  }

  redirectTo404(): void {
    this.router.navigate(['404'])
  }

  ngOnDestroy() {
    if (this.pasteSubscription) {
      this.pasteSubscription.unsubscribe()
    }

    if (this.paramsSubscription) {
      this.paramsSubscription.unsubscribe()
    }
  }
}
