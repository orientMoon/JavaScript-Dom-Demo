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

function preparePlaceholder() {
    if (!document.createElement) {
        return false
    }
    if (!document.createTextNode) {
        return false
    }
    if (!document.getElementById) {
        return false
    }
    if (!document.getElementById('imageGallery')) {
        return false
    }

    const placeholder = document.createElement('img');
    const description = document.createElement('p');
    const descText = document.createTextNode('Choose an image');

    placeholder.setAttribute('id', 'placeholder');
    placeholder.setAttribute('src', 'image/dust.jpg');
    placeholder.setAttribute('alt', 'my image gallery');
    description.setAttribute('id', 'description');

    description.appendChild(descText);

    const gallery = document.getElementById('imageGallery');

    insertAfter(placeholder, gallery);
    insertAfter(description, placeholder);
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

function insertAfter(newElement, targetElement) {
    const parent = targetElement.parentNode;

    if (parent.lastChild === targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
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

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
