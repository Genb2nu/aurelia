import {bindable} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {AuthService} from 'aurelia-auth';
import { Aurelia } from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(AuthService,Aurelia, Router)

export class NavBar {
  _isAuthenticated = false;
  @bindable router = null;

  constructor(auth, aurelia, router) {
    this.auth = auth;
    this.aurelia = aurelia;
    this.router = router;
  }

  get isAuthenticated() {
    return this.auth.isAuthenticated();
  }

  deactivate() {
        this.subscription.dispose();
    }
  
  login(){
    this.router.navigate('/login', { replace: true, trigger: false })
    this.aurelia.setRoot('app-guest');
  }


  signup(){
    this.router.navigate('/signup', { replace: true, trigger: false })
    this.aurelia.setRoot('app-guest');
  }

}