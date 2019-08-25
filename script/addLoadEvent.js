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
