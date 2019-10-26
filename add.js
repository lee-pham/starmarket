function init() {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
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
            await sleep(2000);
        }
        alert('Done!');
    }
    starmarket();
}

init();
