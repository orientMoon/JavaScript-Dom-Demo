function getNewContent() {
    const request = getHTTPObject();

    if (request) {
        request.open('GET', 'example.txt', true);
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                const para = document.createElement('p');
                const txt = document.createTextNode(request.responseText);

                para.appendChild(txt);
                document.getElementById('new').appendChild(para);
            }
        };

        request.send(null);
    } else {
        alert('Sorry, your browser doesn\'t support XMLHTTPRequest');
    }

    alert('Function Done');
}

addLoadEvent(getNewContent());
