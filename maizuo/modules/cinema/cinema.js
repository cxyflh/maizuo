define(["At","text!cinema.html","jquery","loadData"],function(At,text,$,loadData){
	function initView(){
		let promise = loadData.getData("https://www.easy-mock.com/mock/5cb690eac1d19650f26d7f0d/example/maizuoplace");
		promise.then(function(res){
			let myHtml = At.render(text, res.data);
			$("#mainContent").html(myHtml);
			
			$("label").eq(1).click(function(){
				console.log(1)
			})
			
			
			
			
			
		})
	}
	return {
		initView: initView
	}
})
