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

async function send(text, body){
    try {
        return await sendRequest(getAddr(), text, body);
    } catch (err) {
        if (err instanceof Error){
            alert(err.message);
        } else {
            alert(err);
        }
    }
}

registerN("keydown", async (elt) => {
    console.log(elt);
    console.log(await send("update-commentary-1", {gamerTag: "TwilCynder"}).then(res => res.text()))
});

$(".loading").hide();