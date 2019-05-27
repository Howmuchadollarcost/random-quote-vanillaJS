const button = document.getElementById("new-quote");
const quoteText = document.getElementById("text");
const author = document.getElementById("author");
const tweetElem = document.getElementById("tweet-quote");

const API_URL = "https://api.kanye.rest";

button.addEventListener("click", e => {
  e.preventDefault();
  newQuote();
});

function newQuote() {
  fetch(API_URL)
    .then(res => res.json())
    .then(quoteRes => {
      showQuote(quoteRes.quote);

      if(quoteRes.quote.length <= 50){
        quoteText.style.width = '500px';
      }
      
    });
}

function showQuote(quoteRes) {
  quoteText.innerText = quoteRes;
  author.innerText = "Kanye West";
}

tweetElem.addEventListener("click", () => {
  const text = quoteText.innerHTML + ` - ${author.innerHTML}`;
  const tweetLink = `https://twitter.com/home?status=${text}`;
  window.open(tweetLink, "_blank");
});

 