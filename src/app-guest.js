import 'bootstrap';

import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import AppRouterConfig from './router/router-config-guest.js';

import {FetchConfig} from 'aurelia-auth';
@inject(Router, FetchConfig, AppRouterConfig)
export class App {

    constructor(router, fetchConfig, appRouterConfig) {
        this.router = router;
        this.appRouterConfig = appRouterConfig;
        this.fetchConfig = fetchConfig;
    }

    activate() {
        this.appRouterConfig.configure();
        this.fetchConfig.configure();        
    }    

    isLoginOrRegister(){
        if(this.router.history.location.hash == '#/signup' || this.router.history.location.hash == '#/login')
            return true;
        //console.log(this.router.history.location);
    }
}