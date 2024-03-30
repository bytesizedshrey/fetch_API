const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#facts");
const btn = document.querySelector("#btn");


const getFacts = async () => {
    console.log('Getting data....');
    let response = await fetch(URL);
    console.log(response); // Check response
    //Usable data
    let data = await response.json();
    console.log(data); // Check data
    if (factPara) {
        factPara.innerText = data[0].text;
    } else {
        console.error("Element with ID 'fact' not found.");
    }
};

// document.addEventListener("DOMContentLoaded", () => {
//     getFacts();
// });

btn.addEventListener("click", getFacts);