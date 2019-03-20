import { NgModule } from '@angular/core';
import { NewPostComponent } from './new-post/new-post.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  { path: 'new', component: NewPostComponent },
  { path: 'posts', component: PostListComponent },
  { path: '', redirectTo: '/posts', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
