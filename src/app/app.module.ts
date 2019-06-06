import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { SlugPipe } from './slug.pipe';
import { CastComponent } from './cast/cast.component';
import { SnippetComponent } from './post/snippet/snippet.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PostsComponent,
    HomeComponent,
    PostComponent,
    SlugPipe,
    CastComponent,
    SnippetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBLZ92zgOUcXfTjzQeqsxQN8wMHz4ychLQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
