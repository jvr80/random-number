const numEl = document.querySelector('.number');

const btnEl = document.querySelector('.button')

// const h1 = document.querySelector("h1")



const genratorNum = () => {

    

    const randomNumber = Math.floor(Math.random() * 10 + 1);

    

    // console.log(randomNumber)
    numEl.innerHTML = randomNumber;

    
};


btnEl.addEventListener('click', genratorNum);














// const rand = Math.floor(Math.random() * 10 + 1);

// console.log(rand);