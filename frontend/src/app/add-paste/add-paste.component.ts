import { Component, OnInit, APP_ID } from '@angular/core';
import { RestService } from '../services/rest.service'
import { Paste } from '../entities/paste';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-paste',
  templateUrl: './add-paste.component.html',
  styleUrls: ['./add-paste.component.scss']
})
export class AddPasteComponent implements OnInit {
  title: String
  paste: String
  author: String
  expires: Date
  error: String

  constructor(private api: RestService, private router: Router) {
    
  }

  ngOnInit(): void {
  }

  addPaste(): void {
    const addedPaste: Paste = new Paste(null, null, this.paste, this.title, this.author, this.expires)
    console.log(addedPaste)
    this.api.addPaste(addedPaste).subscribe(receivedPaste => {
      if(receivedPaste.id) {
        this.router.navigate(['/paste', receivedPaste.hash])
      } else {
        this.generateErrorMessage()
      }
      console.log(receivedPaste)
    })
  }

  generateErrorMessage(): void {
    this.error = "An error has occured."
  }
}
