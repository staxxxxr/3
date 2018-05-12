
//顶部标题栏
$('.navbar-nav li').on('click', function () {
  $('.navbar-nav li').removeClass('active');
  $(this).addClass('active');
});

//左侧标题栏
$('.side-bar a').on('click', function () {
    $('.side-bar a').removeClass('active');
    $(this).addClass('active');
});

//时钟
function toDou(n)
{
	if(n<10)
	{
		return '0'+n;
	}
	else
	{
		return ''+n;
	}
}
  var aImg=document.getElementsByClassName('img');
	function tick(){
		var oDate=new Date(); 
		var str=toDou(oDate.getHours())+toDou(oDate.getMinutes())+toDou(oDate.getSeconds());
		for(var i=0;i<aImg.length;i++)
		{
			aImg[i].src='img/'+str.charAt(i)+'.png';
		}
	}
	setInterval(tick, 1000);
	tick();