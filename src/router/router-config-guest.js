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
			config.title = 'Guest Route';
			// config.addPipelineStep('authorize', AuthorizeStep); // Add a route filter to the authorize extensibility point.
			config.mapUnknownRoutes('./public/page-404');
			config.map([
                     { route: ['', 'welcome'], name: 'welcome',      moduleId: './guest/welcome',      nav: true, title: 'Welcome' },
                     { route: 'about', name: 'about',      moduleId: 'about',      nav: true, title: 'about' },
                     { route: 'signup',        moduleId: './signup/register',       nav: false, title:'Signup', name: 'signup' },
                     { route: 'login',         moduleId: './login/sample',    nav: false, title:'Login', name: 'login' }
                ]);
			};		   
    		
		this.router.configure(appRouterConfig);	
	}

}