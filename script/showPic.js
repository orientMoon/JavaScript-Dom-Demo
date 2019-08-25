function showPic(whichPic) {

    if (!document.getElementById('placeholder')) {
        return false;
    }

    const source = whichPic.getAttribute('href');
    const placeholder = document.getElementById('placeholder');

    if (placeholder.nodeName !== 'IMG') {
        return false;
    }

    placeholder.setAttribute('src', source);

    if (document.getElementById('description')) {
        const titleContent = whichPic.getAttribute('title');
        const text = titleContent ? titleContent : '';
        const description = document.getElementById('description');

        if (description.nodeType === 3) {
            description.firstChild.nodeValue = text;
        }
    }

    return true;
}

function prepareGallery() {

    if (!document.getElementsByTagName) {
        return false;
    }

    if (!document.getElementById) {
        return false;
    }

    if (!document.getElementById('imageGallery')) {
        return false;
    }

    const gallery = document.getElementById('imageGallery');
    const nodeList = gallery.getElementsByTagName('a');
    const len = nodeList.length;

    for (let i = 0; i < len; i++) {
        const node = nodeList[i];

        node.onclick = function () {
            return !showPic(this);
        };
    }
}

function addLoadEvent(func) {
    const oldOnLoad = window.onload;

    if (typeof oldOnLoad != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldOnLoad();
            func();
        }
    }
}

addLoadEvent(prepareGallery);
