function getWindowHeight()
{
	return $(window).height();
}

function getScrollTop()
{
	return document.documentElement.scrollTop || document.body.scrollTop;
}

function getTopById(id)
{
	return $("#" + id).offset().top;
}

function getScrollOffsetById(id)
{
	return getTopById(id) - getScrollTop();
}

function getInnerHeightById(id)
{
	return $("#" + id).innerHeight();
}

/* 0 bottom on window top, 0.5 middle, 1.0 top on window bottom */
function getWindowPositionById(id)
{
	var elementHeight = getInnerHeightById(id);
	return (getScrollOffsetById(id) + elementHeight) / (getWindowHeight() + elementHeight) * 100.0;
}

function stopBodyAnimation()
{
	$("html, body").stop();
}

function scrollToAnimation(id, ms)
{
	var elementHeight = getInnerHeightById(id);
	var windowHeight = getWindowHeight();
	var topPosition = getTopById(id);
	var scrollTarget = (elementHeight - windowHeight) * 0.5 + topPosition;
	if (scrollTarget < 0) {
		scrollTarget = 0;
	}
	$("html, body").animate({scrollTop:scrollTarget}, ms);
}