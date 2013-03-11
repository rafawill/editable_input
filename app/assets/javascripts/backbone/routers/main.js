Joe.Routers.Main = Backbone.Router.extend({

initialize: function( options ){
Joe.value = new Joe.Models.Value(options.value);
Joe.values = new Joe.Collections.Values(options.values);
},
routes: {
	'':'indexValues',
	'homes/:id':'homesShow'
},
indexValues:function(){
	var homes = new Joe.Views.Homes.Index({model: Joe.value});
	$("#content").html(homes.render().el);
},
homesShow:function(id){
	var value = Joe.values.get(id)
	var homes = new Joe.Views.Homes.Show({model: value, collection:Joe.values});
	$("#content").html(homes.render().el);
}
});