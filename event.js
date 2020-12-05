var giveMePoint = () =>
{
    let btn = $('.tw-transition--enter-done .tw-button--success');

    if(btn.length !== 0) {
    	btn.click();
	console.log(new Date(), "click");
    }
};


setInterval(giveMePoint, 2000);