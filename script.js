

function time(value) {
    var progressBar = document.getElementById('progressbar')
    progressBar.style.width = `${value}%`;
    console.log(value)
}
function delay(n) {
    return new Promise(function (resolve) {
        setTimeout(resolve, n * 1000);
    });
}
async function startTimer() {
    value = 100
    while (value >= 0) {
        time(value);
        value -= 10;
        await delay(1);
    };
}

startTimer();

