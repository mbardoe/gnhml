Template.navigation.events({
	'click .togglenav': function() {
		//console.log("Fade Right");
		$('.navpage').transition('fade right');
	},
	
	'click a': function(ev) {
		if (!(ev.target.pathname=='/logout'))
		{
			ev.preventDefault();
			Router.go(ev.target.href);
			$('.navpage').transition('fade right');
		}
		else
		{
			ev.preventDefault();
			Meteor.logout();
			Router.go("/");
		}
	}
})

Template.navigation.helpers({
	'logoutManager': function() {
		// Does this work. What is "this" in this context
		console.log("logoutManager");
		console.log(this);
		// Not sure what ('allowLoggedOut' in this) is supposed to do.
		// this is the current template, and is an object with one field.
		// title.
		if (!('allowLoggedOut' in this) && Meteor.userId() == null) {
			Router.go('/');
		}
	},
	'sessionProfileManager': function() {
		Session.set('userProfile', Profiles.findOne({account_id: this._id}));
	}
})