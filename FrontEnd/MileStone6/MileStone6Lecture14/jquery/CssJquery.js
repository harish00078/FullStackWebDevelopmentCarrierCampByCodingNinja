// here we are modifying the (css) or we can say giving the (css) to the elements:

// for giving the (css) to the elements:we have to provide the two things:
// 1 = first is the (property) of the (css) that we want to gave the  element:
// 2 = second is the (value) of that (property) that we want to give the element
// $('p').css('color','cyan');
// $('p').css('fontSize','50px');
// $('p').css('textAlign','center');

// if we want to set the multiple property:
$('p').css({
    'color':'black',
    'fontSize':'50px',
    'textAlign':'center',
    'padding':'50px',
    'margin':'auto',
    'borderRadius':'10px',
    'backgroundColor':'white',
    'border':'1px solid black',
    'boxSizing':'border-box',
    'boxShadow':'10px 10px 10px black',
    'border':'2px solid black'
});

