import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[] = [];
  private _url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { 
    this.http
    .get<any[]>(this._url)
    .subscribe((response)=>{
      this.posts = response;
    });
  }

  ngOnInit(): void {
  }

  createPost(input: HTMLInputElement){
    let post: any = { title: input.value };
    input.value = '';

    this.http
    .post(this._url,post)
    .subscribe(response => {
      post.id = response;
      this.posts.splice(0, 0, post);
      console.log(response);
    })
  }

}
