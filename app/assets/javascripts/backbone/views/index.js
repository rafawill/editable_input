Joe.Views.Homes.Index = Backbone.View.extend({
	initialize: function( attributes ){
		var self = this;
		this.model.bind("change", this.render, this);
	},
	id: "index",
	template: JST["backbone/templates/homes/index"],
	events: {
		'click .edit': 'edit'
	},
	edit:function(event){
		Backbone.history.navigate('homes/' + this.model.attributes[0].id, {trigger: true});
	},
	render:function(){
		var self = this
		var el = this.$el
 		var index = this.template({model:this.model.attributes[0]});
		el.html(index);
		return this;
	}
});