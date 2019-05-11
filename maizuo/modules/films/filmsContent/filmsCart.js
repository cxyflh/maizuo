define(["At","text!filmsCart.html","jquery","loadData"], function(At,text,$,loadData){
	function initView(){
		let promise = loadData.getData("https://www.easy-mock.com/mock/5cb690eac1d19650f26d7f0d/example/maizuo1");
		promise.then(function(res){
			let myHtml = At.render(text, res.data);
			$("#filmsContent").html(myHtml);
		})
	}
	return {
		initView: initView
	}
})