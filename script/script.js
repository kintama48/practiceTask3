$(document).ready(() => {
    $("#showParagraph").click(() => {
        $('#paragraph1').show();
    });

    $('#hideParagraph').click(() => {
        $('#paragraph1').hide();
    });

    $('#changeParagraph').click(()=> {  // change text in #paragraph2 with alternative text
        let pg = "This is some alternative paragraph text! This is some alternative paragraph text! This is some alternative paragraph text! This is some alternative paragraph text! This is some alternative paragraph text! "
        let elem = $('#paragraph2')
        let content = elem.text()
        elem.text(content.replace(content, pg));
    });

    $('#changeBg').click(()=> {  //change bg color of whole page with random color
        let elem = $('body');
        elem.css('background-color', '#'+(Math.random().toString(16)+'00000').slice(2,8));
    });

    $('#changeColor').click(()=> { //change text color of paragraph with random color
        let elem = $('#paragraph3');
        elem.css('color', '#'+(Math.random().toString(16)+'00000').slice(2,8));
    });
});
