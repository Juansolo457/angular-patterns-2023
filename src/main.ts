import { NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

/* eslint-disable @typescript-eslint/no-explicit-any */
const bootstrap: any = (): Promise<NgModuleRef<AppModule>> => platformBrowserDynamic().bootstrapModule(AppModule);
bootstrap().catch((err: any): void => console.log(err)); // eslint-disable-line no-console
