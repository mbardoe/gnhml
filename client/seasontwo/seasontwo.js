Template.seasontwo.helpers({
	// 'competition': function(){
	// 	return Competitions.find({});
	// },

	// 'competition_date': function(){
	// 	return this.date;
	// },

	// 'team': function(){
	// 	return Teams.find({});
	// },

	// 'team_name': function(){
	// 	return this.name;
	// },

	// 'random_score': function(){
	// 	return Math.floor(Math.random() * 10);
	// }

	'season_context': function() {
		var tracking = [
		{
			field: 'name',
			title: 'Teams'
		}
		];

		var competitions = Competitions.find({}).fetch();

		var createFunc = function(comp_id) {
			return function(value, ctx) {
				console.log("competition_id: " + comp_id + "\nteam_id: " + ctx._id + "\nrelevant scores: " + Scores.find({competition_id: comp_id, team_id: ctx._id}).count());
				
				var competition_score = 0;
				// map a function to each 
				Scores.find({competition_id: comp_id, team_id: ctx._id}).map(function(doc) {
					competition_score += doc.score;
				})
				console.log("\tscore:" + competition_score);
				return competition_score;
			}
		}

		var randomName = function() {
			var id_material = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
			var out = "";
			for (var i = 0; i < 10; i++) {
				out += id_material[Math.floor(Math.random() * id_material.length)];
			}
			return out;
		}

		for (var c = 0; c < competitions.length; c++) {
			var _id = competitions[c]._id;
			console.log('prepping: ' + _id);
			tracking.push({
				field: '',
				title: Competitions.findOne(_id).date.toString(),
				func: createFunc(_id)
			})
		}

		console.log(tracking);
		return {
			db: Teams,
			selector: {},
			tracking: tracking,
			hoverable: true
		}
	}
})