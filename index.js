$(document).ready(() =>{
    const trigger_button = $('button');
    trigger_button.click(() => {
        $("#c").animate({width: '80%'}).text('80%');
        $("#py").animate({width: '50%'}).text('50%');
        $("#js").animate({width: '75%'}).text('75%');
        $("#jq").animate({width: '55%'}).text('55%');
        $("#react").animate({width: '20%'}).text('20%');
        $("#html").animate({width: '85%'}).text('85%');
        $("#css").animate({width: '70%'}).text('70%');
        $("#boots").animate({width: '65%'}).text('65%'); 
        $("#linux").animate({width: '30%'}).text('30%');
        $("#oop").animate({width: '50%'}).text('50%');
    });

    
})
