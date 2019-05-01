import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainpanelComponent } from './components/mainpanel/mainpanel.component';
import { ProjectsService } from "./services/projects/projects.service";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainpanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
        provide: APP_INITIALIZER,
        useFactory: startupServiceFactory,
        deps: [ProjectsService],
        multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function startupServiceFactory(startupService: ProjectsService) {
    return () => startupService.load();
  }
