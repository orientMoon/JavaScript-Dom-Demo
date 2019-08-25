function insertParagraph(text) {

    window.onload = function () {
        const txt_1 = document.createTextNode('This is ');

        const emphasis = document.createElement('em');
        const txt_2 = document.createTextNode('my ');
        emphasis.appendChild(txt_2);

        const txt_3 = document.createTextNode('content.');

        const para = document.createElement('p');
        const testDiv = document.getElementById('testDiv');

        para.appendChild(txt_1);
        para.appendChild(emphasis);
        para.appendChild(txt_3);

        testDiv.appendChild(para);
    }
}
