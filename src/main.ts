import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AdditionComponent } from './app/addition/addition.component';
import { ArrayexComponent } from './app/arrayex/arrayex.component';

// bootstrapApplication(AppComponent, appConfig)   change the class name of component which you want to boot first while runtime
// bootstrapApplication(AdditionComponent, appConfig)
// bootstrapApplication(ArrayexComponent, appConfig)
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
