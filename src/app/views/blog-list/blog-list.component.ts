import { BLOGS } from './../../mock/blogs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs = BLOGS;

  constructor() { }

  ngOnInit(): void {
  }

}
