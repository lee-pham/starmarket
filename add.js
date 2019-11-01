function init() {
    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    }

    function loadMore() {
        for (let i = 0; i < 20; i++) {
            document.getElementsByClassName('btn load-more')[0].click();
            sleep(350)
        }
    }

    const bElements = document.getElementsByTagName('button');
    var filtered = [];
    function starmarket() {
        for (let i = 0; i < bElements.length; i++) {
            if (bElements[i].innerHTML == 'ADD') {
                filtered.push(bElements[i])
            }
        }
        for (let i = 0; i < filtered.length; i++) {
            filtered[i].click();
            sleep(900);
        }
        alert('Done!');
    }
    loadMore();
    starmarket();
}

init();
