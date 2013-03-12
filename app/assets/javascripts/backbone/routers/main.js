Joe.Routers.Main = Backbone.Router.extend({

initialize: function( options ){
    Joe.values = new Joe.Collections.Values(options.values);
},
routes: {
	'':'indexValues',
	'values/:id':'homesShow'
},
indexValues:function(){
	var modelValue = new Joe.Models.Value();
	modelValue.fetch({
		success:function(respond,model){
			var homes = new Joe.Views.Homes.Index({model: modelValue});
			$("#content").html(homes.render().el);
		}
	});
},
homesShow:function(id){
	var value = Joe.values.get(id)
	var homes = new Joe.Views.Homes.Show({model: value, collection:Joe.values});
	$("#content").html(homes.render().el);
}
});