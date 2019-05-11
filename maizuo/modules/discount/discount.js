define(["At","text!discount.html","jquery"],function(At,text,$){
	function initView(){
		let data = {
			title: "特惠"
		}
		let myHtml = At.render(text,data);
		$("#mainContent").html(myHtml);
	}
	return {
		initView: initView
	}
})