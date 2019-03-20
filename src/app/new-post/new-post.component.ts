import { Component } from '@angular/core';
import { Router } from "@angular/router"
import { DbCommunicationService } from '../db-communication.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  title:String;
  content:String;

  constructor(private dbc: DbCommunicationService,
    private router: Router) { }

  onSubmit() {
    this.dbc.storePost(this.title, this.content).subscribe();
    this.router.navigate(['/posts']);
  }

}
