const text = document.getElementById("text");
const author = document.getElementById("author");
const btn = document.getElementById("btn");

const twi = document.getElementById("twi");



const getNewQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    let realData = "";
    let quotesData = "";

    const twiNow = () => {
        let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text} ${quotesData.author}`;
        window.open(tweetPost);
    };



    const getDataQuotes = () => {
        let num = Math.floor(Math.random() * 10);
        quotesData = realData[num];
        text.innerHTML = `${quotesData.text}`;
        author.innerHTML = `${quotesData.author}`;
    }

    try {
        let data = await fetch(api);
        realData = await data.json();
        // console.log(realData[num].text);   
        getDataQuotes();


        twi.addEventListener('click', twiNow);
        btn.addEventListener('click', getDataQuotes);
    } catch (error) {}
};




getNewQuotes();