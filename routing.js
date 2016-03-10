Router.route('/example', {
	template: 'example',
	onBeforeAction: function(){
		// Will need to update this section to reflect account roles
        console.log("You triggered 'onBeforeAction' for 'home' route.");
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("splash");
        }
    }
});

Router.route('/', {
	template: "splash"
});

Router.route('/season', {
	template: "season",
	onBeforeAction: function(){
		// Will need to update this section to reflect account roles
        console.log("You triggered 'onBeforeAction' for 'home' route.");
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("splash");
        }
    }
});

Router.route('/team', {
	template: "team",
	onBeforeAction: function(){
		// Will need to update this section to reflect account roles
        console.log("You triggered 'onBeforeAction' for 'home' route.");
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("splash");
        }
    }
});

Router.route('/admin', {
	template: "admin",
	onBeforeAction: function(){
		// Will need to update this section to reflect account roles
        console.log("You triggered 'onBeforeAction' for 'home' route.");
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("splash");
        }
    }
});

Router.route('/home', {
	template: 'home',
	onBeforeAction: function(){
		// Will need to update this section to reflect account roles
        console.log("You triggered 'onBeforeAction' for 'home' route.");
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("splash");
        }
    }
});

Router.route('/headup', {
    template: 'headup',
	onBeforeAction: function(){
		// Will need to update this section to reflect account roles
        console.log("You triggered 'onBeforeAction' for 'home' route.");
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("splash");
        }
    }
});

Router.route('/personal', {
    template: 'personal',
	onBeforeAction: function(){
		// Will need to update this section to reflect account roles
        console.log("You triggered 'onBeforeAction' for 'home' route.");
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("splash");
        }
    }
});

Router.route('/grader', {
	template: 'grader',
	onBeforeAction: function(){
		// Will need to update this section to reflect account roles
        console.log("You triggered 'onBeforeAction' for 'home' route.");
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("splash");
        }
    }
});

Router.route('/studentmgr', {
	template: 'studentmgr',
	onBeforeAction: function(){
		// Will need to update this section to reflect account roles
        console.log("You triggered 'onBeforeAction' for 'home' route.");
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("splash");
        }
    }
});

Router.route('/teammgr', {
	template: 'teammgr',
	onBeforeAction: function(){
		// Will need to update this section to reflect account roles
        console.log("You triggered 'onBeforeAction' for 'home' route.");
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("splash");
        }
    }
});

Router.route('/rounds', {
	template: 'rounds',
	onBeforeAction: function(){
		// Will need to update this section to reflect account roles
        console.log("You triggered 'onBeforeAction' for 'home' route.");
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("splash");
        }
    },
	waitOn: function() {
		return Meteor.subscribe('rounds');
	}
});

Router.route('/views', {
	template: 'views',
	onBeforeAction: function(){
		// Will need to update this section to reflect account roles
        console.log("You triggered 'onBeforeAction' for 'home' route.");
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("splash");
        }
    },
	waitOn: function() {
		return Meteor.subscribe('seasons');
	}
});

Router.route('/individual', {
	template: 'individual',
	onBeforeAction: function(){
		// Will need to update this section to reflect account roles
        console.log("You triggered 'onBeforeAction' for 'home' route.");
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("splash");
        }
    }
});


