import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../service/app.service';
import { IContent } from '../content';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  public content: IContent | undefined = undefined;
  entries: [string, unknown][] = [];
  constructor(
    private route: ActivatedRoute,
    private ContentService: ContentService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getContentById(id);
    }
  }

  getContentById(id: string): void {
    this.ContentService.getContent().subscribe((data) => {
      this.content = data.data.contents.find(
        (content) => content.contentId === id
      );
      this.entries = this.content ? Object.entries(this.content) : [];
    });
  }
}
