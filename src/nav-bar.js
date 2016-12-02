import {bindable} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {AuthService} from 'aurelia-auth';
import { Aurelia } from 'aurelia-framework';

@inject(AuthService,Aurelia)

export class NavBar {
  _isAuthenticated = false;
  @bindable router = null;

  constructor(auth, aurelia) {
    this.auth = auth;
    this.aurelia = aurelia;
  }

  get isAuthenticated() {
    return this.auth.isAuthenticated();
  }

  deactivate() {
        this.subscription.dispose();
    }
  login(){
    this.aurelia.setRoot('login/login');
  }

}