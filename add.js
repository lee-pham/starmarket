function init() {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function loadMore() {
        for (let i = 0; i < 20; i++) {
            document.getElementsByClassName('btn load-more')[0].click();
            await sleep(350);
        }
    }

    const bElements = document.getElementsByTagName('button');
    var filtered = [];
    async function starmarket() {
        for (let i = 0; i < bElements.length; i++) {
            if (bElements[i].innerHTML == 'ADD') {
                filtered.push(bElements[i])
            }
        }
        for (let i = 0; i < filtered.length; i++) {
            filtered[i].click();
            await sleep(900);
        }
        alert('Done!');
    }
    loadMore();
    starmarket();
}

init();
