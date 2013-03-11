Joe.Views.Homes.Show = Backbone.View.extend({
	id: "index",
	template: JST["backbone/templates/homes/show"],
	events: {
		'click .save': 'save',
		'click .cancel': 'cancel'
	},
	save:function(event){
		var el = this.$el;
		var self = this;
		if(_.contains(_.map(this.collection.models,function(a){return a.get('name')}),el.find('#input-editable').val() )){
			id = _.map(this.collection.models,function(a){return a.get('name')==el.find('#input-editable').val()? a.get('id') :''});
			var attributes = {
			id: _.max(id),
			name: el.find('#input-editable').val(),
			selected: true
		}
		}else{
         this.model = new Joe.Models.Value;
         var attributes = {
			name: el.find('#input-editable').val(),
			selected: true
		}
		}
		
		this.model.save(attributes,
		{
			success: function(model, response){
				var el = self.$el;
					self.model.set(response);
					self.collection.add(self.model);
				Backbone.history.navigate('', {trigger: true,replace: true});
				window.location.reload()	
			}
		});
	},
	cancel:function(event){
		Backbone.history.navigate('', {trigger: true});
	},
	render:function(){
		var self = this
		var el = this.$el
 		var index = this.template({model:this.model, collection:this.collection});
 		el.html(index);
		var inputText = el.find('select#value-joe option:selected').text();
		el.find('#input-editable').val(inputText)
		return this;
	}
});