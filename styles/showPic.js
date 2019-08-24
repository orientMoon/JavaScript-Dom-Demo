function showPic(whichPic) {

    const source = whichPic.getAttribute('href');
    const placeholder = document.getElementById('placeholder');

    placeholder.setAttribute('src', source);

    const text = whichPic.getAttribute('title');
    const description = document.getElementById('description');

    description.firstChild.nodeValue = text;
}
