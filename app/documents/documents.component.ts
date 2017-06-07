import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
    {title: "My First Doc", 
    description: "asdfasdaf", 
    file_url: "http://google.com",
    updated_at: "11/11/11", 
    image_url: "http://www.50-best.com/images/funny_nerd_memes/do_you_so_hard_nerd_meme.jpg"
  },

    {title: "My Second Doc", 
    description: "asdfasdaf", 
    file_url: "http://google.com",
    updated_at: "12/12/12", 
    image_url: "https://img.memecdn.com/nerd-wise_o_557006.jpg"},

    {title: "My Third Doc", 
    description: "asdfasdaf", 
    file_url: "http://google.com",
    updated_at: "10/10/10", 
    image_url: "http://funnyasduck.net/wp-content/uploads/2012/11/funny-fat-kid-geek-nerd-welcome-to-the-internet-pics.jpg"}
  ]
}