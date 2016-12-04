import {inject, Aurelia} from 'aurelia-framework';

@inject(Aurelia)
export class SetRootApp {
    constructor(aurelia){
        this.aurelia = aurelia;
        
        this.aurelia.setRoot('root/appLogin')
    }

}
