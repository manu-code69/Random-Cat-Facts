
// Why we are using Axios 

// Beacuse it gives data direct in usable form unlike fetch 

// From Fetch we have to convert first in usble data ;

let url = "https://catfact.ninja/fact";                 // CAT API

async function start(){
    try{
    let res = await axios.get(url);
    return res.data.fact
    }
    catch(e){
        return "No Facts Found"
    }

}

let btn = document.querySelector("#o")

btn.addEventListener("click",display_fact);

// display in html

let h1 = document.querySelector("h1")

let fact = document.createElement("h4")

h1.append(fact)

async function display_fact(){
   
    let random_fact = await start();
    fact.innerHTML = random_fact
    
    // let hr = document.createElement("hr")
    // h1.append(hr);
}

// ----------------  DOG_img  ---------------------------

let url2 = "https://dog.ceo/api/breeds/image/random";   // DOG API

let btn2 = document.querySelector("#t")

async function start2(){
    try{
        let res = await axios.get(url2)
        return res.data.message
    }
    catch{
        return "Could Not Load Image";
    }
}

btn2.addEventListener("click",display_2)

async function display_2(){

    let div = document.querySelector("div")
    div.innerHTML = "";                 // At Every Call Set Div = ""  So only 1 img shown at a time
    let dog_img = await start2()
    let img = document.createElement("img")
    img.src = dog_img
    div.insertAdjacentElement("afterbegin",img)

}
