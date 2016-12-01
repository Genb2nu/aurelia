import {AuthorizeStep} from 'aurelia-auth';
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export default class{

	constructor(router){
		this.router = router;
	}
	configure(){
		var appRouterConfig = function(config){
			config.title = 'Aurelia';
			config.addPipelineStep('authorize', AuthorizeStep); // Add a route filter to the authorize extensibility point.

			config.map([
                     { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
                     { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
                     { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' },
                     { route: 'signup',        moduleId: './signup/signup',       nav: false, title:'Signup' },
                     { route: 'login',         moduleId: './login/login',       nav: false, title:'Login' },
                     { route: 'logout',        moduleId: './logout/logout',       nav: false, title:'Logout' }
                ]);
			};

		this.router.configure(appRouterConfig);	
	}

}