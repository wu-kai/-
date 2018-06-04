//头部搜索框样式点击切换
;(function(){
	$('.common_head .switch span').on('click',function(){
		if($(this).hasClass('active')){
			return;
		}else{
			$(this).addClass('active').siblings().removeClass('active');
		}
	})
})();