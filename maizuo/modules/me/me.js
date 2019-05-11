define(["At","text!me.html","jquery"],function(At,text,$){
	function initView(){
		let data = {
			title: "我的"
		}
		let myHtml = At.render(text,data);
		$("#mainContent").html(myHtml);
	}
	return {
		initView: initView
	}
})