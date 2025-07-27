import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { BaseWidget } from './base-widget/base-widget';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
