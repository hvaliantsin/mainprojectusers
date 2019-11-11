import { Component } from '@angular/core';
import { TokenStorageService } from './reglog/auth/token-storage.service';
import { NewsService } from './news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  news = {};
  title = 'transportation-project';
  private roles: string[];
  private authority: string;

  constructor(private tokenStorage: TokenStorageService, private newsService: NewsService) { }
  
  ngOnInit() {
    this.newsService.getNews().subscribe(data => this.news = data);
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_TC') {
          this.authority = 'tc';
          return false;
        } else if (role === 'ROLE_USER') {
          this.authority = 'user';
          return false;
        } else if (role === 'ROLE_CLIENT') {
          this.authority = 'client'
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }
}
