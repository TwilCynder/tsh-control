import { sendRequest } from "./lib/tsh.js";

function registerN(name, f){
    window[name] = f;
}

/**
 * 
 * @param {Function} f 
 */
function register(f){
    registerN(f.name, f)
}

function getAddr(){
    let elt = document.getElementById("ip");
    let addr = elt.value;
    if (!addr) throw "No address specified. Please specify the address at which to find the TSH instance.";

    if (!addr.includes("://")){
        addr = "http://" + addr;
    }

    return addr;
}

async function send(text){
    try {
        await sendRequest(getAddr(), text);
    } catch (err) {
        if (err instanceof Error){
            alert(err.message);
        } else {
            alert(err);
        }
    }
}

registerN("keydown", (elt) => {
    console.log(elt);
    send("scoreboard0-team1-scoreup")
});

$(".loading").hide();