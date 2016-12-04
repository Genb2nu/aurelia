import {inject, Aurelia} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Aurelia, Router)
export class SetRootLogin {
    constructor(aurelia, router){
        this.aurelia = aurelia;
        this.aurelia.setRoot('login/login')
    }

}
