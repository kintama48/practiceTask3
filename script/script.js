// Task 1
$(document).ready(() => {
    $("#showParagraph").click(() => {
        $('#paragraph1').show();
    })

    $('#hideParagraph').click(() => {
        $('#paragraph1').hide();
    })

    $('#changeParagraph').click(()=> {
        let pg = "This is some alternative paragraph text! This is some alternative paragraph text! This is some alternative paragraph text! This is some alternative paragraph text! This is some alternative paragraph text! "
        let elem = $('#paragraph2')
        let content = elem.text()
        elem.text(content.replace(content, pg));
    })

    $('#changeBg').click(()=> {
        let elem = $('#paragraph4');
        let bg = elem.css('background-color');
        if (bg === 'rgba(0, 0, 0, 0)') {
            let color = '#'+(Math.random().toString(16)+'00000').slice(2,8);
            elem.css('background-color', color);
        } else {
            elem.css('background-color', 'rgba(0, 0, 0, 0)');
        }
    })

    $('#changeColor').click(()=> {
        let elem = $('#paragraph4');
        let bg = elem.css('color');
        if (bg === 'rgba(0, 0, 0, 0)') {
            let color = '#'+(Math.random().toString(16)+'00000').slice(2,8);
            elem.css('color', color);
        } else {
            elem.css('color', 'rgba(0, 0, 0, 0)');
        }
    })

});
