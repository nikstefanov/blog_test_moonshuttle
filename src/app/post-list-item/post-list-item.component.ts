import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.interface';
import { DbCommunicationService } from '../db-communication.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent {

  @Input() post: Post; 
  @Output() deletePost = new EventEmitter<String>();

  constructor(private dbc: DbCommunicationService) { }

  private plusLike() {
    this.post.likes++;
    this.dbc.setLikes((this.post as any).key, this.post.likes).subscribe();
  }

  private minusLike() {
    this.post.likes--;
    this.dbc.setLikes((this.post as any).key, this.post.likes).subscribe();
  }

  private delete() {
    this.deletePost.emit((this.post as any).key);
  }

}
