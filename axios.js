
// Why we are using Axios 

// Beacuse it gives data direct in usable form unlike fetch 

// From Fetch we have to convert first in usble data ;

let url = "https://catfact.ninja/fact";

async function start(){
    try{
    let res = await axios.get(url);
    return res.data.fact
    }
    catch(e){
        return e
    }

}

let btn = document.querySelector("button")

addEventListener("click",display_fact);


// display in html

async function display_fact(){

    let random_fact = await start();

    let h1 = document.querySelector("h1")

    let fact = document.createElement("h4")
    fact.innerHTML = random_fact
    h1.append(fact)

    let hr = document.createElement("hr")
    h1.append(hr);

}
