const adviceBtn = document.getElementById('new-advice-btn');
const adviceBubble = document.getElementById('advice-bubble');
const coffeeCup = document.getElementById('coffee-icon');

adviceBtn.addEventListener('click', rendernewAdvice)

async function rendernewAdvice() {
    coffeeCup.setAttribute("trigger", "in");
    coffeeCup.setAttribute("state", "hover-steam");
    const adviceQuotes = await getAdvice()
    console.log(adviceQuotes)
    adviceBubble.innerHTML = `<p>${adviceQuotes}</p>`
    setTimeout(() => {
        coffeeCup.setAttribute("trigger", "loop");
        coffeeCup.setAttribute("state", "loop-cycle");
    }, 2000);
}

async function getAdvice() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        return data.slip.advice;
    } catch (error) {
        console.error('Error fetching advice:', error);
        return 'Sorry, could not fetch advice at this time.';
    }
}