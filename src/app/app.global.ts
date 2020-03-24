import { Injectable } from '@angular/core';

@Injectable()
export class AppGlobals {

    // Development Config
    baseUserProfile: any;
    readonly baseAppName: string = 'AWIZ.POS';
    readonly baseDomainUrl: string = 'localhost:4200';
    readonly baseAppUrl: string = 'http://localhost:4200/';
    readonly baseAPIUrl: string = 'http://localhost:52973/api/';
    readonly baseAPIRootUrl: string = 'https://localhost:44377/api/';
}
