import { Component, OnInit } from '@angular/core';
import { DbCommunicationService } from '../db-communication.service';
import { Post } from '../post.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  private posts:Post[] = [];

  constructor(private dbc: DbCommunicationService) { }

  ngOnInit() {
    this.dbc.getPosts()
      .subscribe((data:Object)=>{
        for (let key in data) {
          data[key].key = key;
          if(!data[key].hasOwnProperty('likes')){
            data[key].likes = 0;
          }
          this.posts.push(data[key]);
        }
      });
    //console.log(this.posts);
  }

  private deletePost(key:String) {
    this.posts = this.posts.filter(post=>(post as any).key != key);
    this.dbc.deletePost(key).subscribe();
  }

}
