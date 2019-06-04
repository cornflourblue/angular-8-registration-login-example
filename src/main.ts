import './polyfills';

import '@angular/material/prebuilt-themes/indigo-pink.css';
import './main.css';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
platformBrowserDynamic().bootstrapModule(AppModule);