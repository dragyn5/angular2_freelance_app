"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let DocumentsComponent = class DocumentsComponent {
    constructor() {
        this.pageTitle = "Document Dashboard";
        this.documents = [
            { title: "My First Doc",
                description: "asdfasdaf",
                file_url: "http://google.com",
                updated_at: "11/11/11",
                image_url: "http://www.50-best.com/images/funny_nerd_memes/do_you_so_hard_nerd_meme.jpg"
            },
            { title: "My Second Doc",
                description: "asdfasdaf",
                file_url: "http://google.com",
                updated_at: "12/12/12",
                image_url: "https://img.memecdn.com/nerd-wise_o_557006.jpg" },
            { title: "My Third Doc",
                description: "asdfasdaf",
                file_url: "http://google.com",
                updated_at: "10/10/10",
                image_url: "http://funnyasduck.net/wp-content/uploads/2012/11/funny-fat-kid-geek-nerd-welcome-to-the-internet-pics.jpg" }
        ];
    }
};
DocumentsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'documents',
        templateUrl: 'documents.component.html',
        styleUrls: ['documents.component.css']
    })
], DocumentsComponent);
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documents.component.js.map