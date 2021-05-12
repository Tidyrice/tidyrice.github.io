fadeSwap("hello", ["Hello,", "你好,", "Hola,", "こんにちは,", "Bonjour,"], 15);

async function fadeSwap(ID, textArray, timePerFrame) {
    const text = document.getElementById(ID);
    text.style.opacity = 1;

    for (i = 1; i <= textArray.length; i++) {
        //fade out
        for (j = 1; j > 0; j = text.style.opacity) {
            text.style.opacity = parseFloat(text.style.opacity) - 0.01;
            await sleep(timePerFrame);
            //terminates when opacity reaches 0
        }

        //switch text
        text.innerHTML = textArray[i];

        //fade in
        for (k = 0; k < 1; k = text.style.opacity) {
            text.style.opacity = text.style.opacity = parseFloat(text.style.opacity) + 0.01;
            await sleep(timePerFrame);
            //terminates when opacity reaches 1
        }
        //reloop
        if (i == textArray.length - 1)
            i = -1;
    }
}

function sleep(miliseconds) {
    return new Promise(resolve => setTimeout(resolve, miliseconds));
  }