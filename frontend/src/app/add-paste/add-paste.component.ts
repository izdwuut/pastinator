import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Paste } from '../entities/paste';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-add-paste',
  templateUrl: './add-paste.component.html',
  styleUrls: ['./add-paste.component.sass']
})
export class AddPasteComponent {
  title: String = ''
  paste: String = ''
  author: String = ''
  expires: Date = null
  @ViewChild('pasteInput') pasteInput: ElementRef

  addPasteSubscription: Subscription

  constructor(private api: RestService, private _snackBar: MatSnackBar, private router: Router) { }

  addPaste(): void {
    const addedPaste: Paste = { hash: null, paste: this.paste, author: this.author, title: this.title, expires: this.expires }

    this.api.addPaste(addedPaste).subscribe((receivedPaste: Paste) => {
      if (receivedPaste.hash) {
        console.log(receivedPaste)
      } else {
        this.generateErrorMessage()
      }

    })
  }

  generateErrorMessage(): void {
    let errors: string[] = []
    if (!this.paste) {
      errors.push('paste is required')
    }
    if (this.isExpired(this.expires)) {
      errors.push('date has to be in the future')
    }
    this._snackBar.open("There were errors: " + errors.join(', ') + '.', 'Ok', {
      duration: 2000
    })
  }

isExpired(expires: Date) {
  if (expires != null && expires < (new Date())) {
    return true
  }
  return false
}

onKey(event: KeyboardEvent) {
  let keyCode = event.keyCode || event.which
  if(keyCode == 9) {
    const pasteInput = this.pasteInput.nativeElement
    let start = pasteInput.slectionStart
    let end = pasteInput.selectionEnd
    this.paste = this.paste.substring(0, start) + '\t' + this.paste.substring(end)
    pasteInput.selectionStrt = pasteInput.selectionEnd = start + 1
    event.preventDefault()
  }
}

isDateSelectable(date: Date) {
  return (new Date()) < date
}

  ngOnDestroy() {
    if (this.addPasteSubscription) {
      this.addPasteSubscription.unsubscribe()
    }
  }

}
