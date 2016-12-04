import {inject, Aurelia} from 'aurelia-framework';

@inject(Aurelia)
export class SetRootSignup {
    constructor(aurelia){
        this.aurelia = aurelia;
        this.aurelia.setRoot('login/login')
    }

}
