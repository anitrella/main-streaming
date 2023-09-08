import { Component, ElementRef, OnInit } from '@angular/core';
import { IContent } from '../content';
import { ContentService } from '../service/app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public contents: IContent[] = [];
  filteredContents: IContent[] = [];
  sub!: Subscription;

  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredContents = this.performFilter(value);
  }

  constructor(private _contentService: ContentService) {}

  performFilter(filterBy: string): IContent[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.contents.filter((content: IContent) =>
      content.title.toLocaleLowerCase().includes(filterBy)
    );
  }

  onDelete(event: Event) {
    const button = event.target as HTMLButtonElement;
    const id = button?.getAttribute('id');
    console.log(event.target);
    if (id) {
      this.filteredContents = this.filteredContents.filter(
        (content: IContent) => content.contentId !== id
      );
    }
  }

  performOrderContentId() {
    this.filteredContents.sort((a, b) =>
      a.contentId.localeCompare(b.contentId)
    );
  }

  performOrderContentIdReverse() {
    this.filteredContents.sort((a, b) =>
      b.contentId.localeCompare(a.contentId)
    );
  }

  performOrderTitle() {
    this.filteredContents.sort((a, b) => {
      // Extract the number from the string //
      let firstNumber = a.title.match(/(\d+)/);
      let secondNumber = b.title.match(/(\d+)/);

      //Check if firstNumber and secondNumber are not null to continue//
      if (firstNumber === null || secondNumber === null) {
        return 0;
      }
      return parseInt(firstNumber[0]) - parseInt(secondNumber[0]);
    });
  }

  performOrderTitleReverse() {
    this.filteredContents.sort((a, b) => {
      // Extract the number from the string //
      let firstNumber = a.title.match(/(\d+)/);
      let secondNumber = b.title.match(/(\d+)/);

      //Check if firstNumber and secondNumber are not null to continue//
      if (firstNumber === null || secondNumber === null) {
        return 0;
      }
      return parseInt(secondNumber[0]) - parseInt(firstNumber[0]);
    });
  }

  ngOnInit(): void {
    this.sub = this._contentService.getContent().subscribe((contents) => {
      this.contents = contents.data.contents;
      this.filteredContents = this.contents;
      // this.performOrderContentId();
      // this.performOrderContentIdReverse();
      // this.performOrderTitle();
      // this.performOrderTitleReverse();
    });
  }
}
