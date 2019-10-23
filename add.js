function init() {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const bElements = document.getElementsByTagName('button');

    async function starmarket() {
        for (let i = 0; i < bElements.length; i++) {
            if (bElements[i].innerHTML == 'ADD') {
                bElements[i].click();
                await sleep(2000);
            }
        }
        alert('Done!');
    }
    starmarket();
}

init();
