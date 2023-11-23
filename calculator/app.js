const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "In the middle of every difficulty lies opportunity. - Albert Einstein"
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayDailyQuote() {
    const quoteElement = document.getElementById("quote");
    const dailyQuote = getRandomQuote();
    quoteElement.textContent = dailyQuote;
}

displayDailyQuote();