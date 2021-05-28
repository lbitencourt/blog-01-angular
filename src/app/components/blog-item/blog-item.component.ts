import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {

  @Input() blog?: Blog;

  constructor() { }

  ngOnInit(): void {
  }

}
