import { Component, OnInit, APP_ID, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RestService } from '../services/rest.service'
import { Paste } from '../entities/paste';
import { Router } from '@angular/router';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-paste',
  templateUrl: './add-paste.component.html',
  styleUrls: ['./add-paste.component.scss']
})
export class AddPasteComponent implements OnInit, AfterViewInit {
  title: String
  paste: String = ''
  author: String
  expires: Date
  error: String
  @ViewChild('pasteInput') pasteInput: ElementRef;

  constructor(private api: RestService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void { 
  }

  addPaste(): void {
    const addedPaste: Paste = new Paste(null, null, this.paste, this.author, this.title, this.expires)
    this.api.addPaste(addedPaste).subscribe(receivedPaste => {
      if (receivedPaste.id) {
        this.router.navigate(['/paste', receivedPaste.hash])
      } else {
        this.generateErrorMessage()
      }
    })
  }

  generateErrorMessage(): void {
    let errors = []
    if (!this.paste) {
      errors.push('paste is required')
    }
    this._snackBar.open("There were errors: " + errors.join(', ') + '.', 'Ok', {
      duration: 2000,
    });

    this.error = "An error has occured."
  }

  onKey(event: KeyboardEvent) {
    var keyCode = event.keyCode || event.which;

    if (keyCode == 9) {
      const pasteInput = this.pasteInput.nativeElement
      var start = pasteInput.selectionStart
      var end = pasteInput.selectionEnd

      this.paste = this.paste.substring(0, start)
        + "\t"
        + this.paste.substring(end);

      pasteInput.selectionStart =
      pasteInput.selectionEnd = start + 1;
      event.preventDefault();
    }
  }
}
