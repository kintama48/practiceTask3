$(document).ready(() => {
    $("#showParagraph").click(() => {
        $('#paragraph1').show();
    });

    $('#hideParagraph').click(() => {
        $('#paragraph1').hide();
    });

    $('#changeParagraph').click(()=> {
        console.log('here');
        let pg = "This is some alternative paragraph text! This is some alternative paragraph text! This is some alternative paragraph text! This is some alternative paragraph text! This is some alternative paragraph text! "
        let elem = $('#paragraph2')
        let content = elem.text()
        elem.text(content.replace(content, pg));
    });

    $('#changeBg').click(()=> {
        let elem = $('body');
        elem.css('background-color', '#'+(Math.random().toString(16)+'00000').slice(2,8));
    });

    $('#changeColor').click(()=> {
        let elem = $('#paragraph3');
        elem.css('color', '#'+(Math.random().toString(16)+'00000').slice(2,8));
    });
});
