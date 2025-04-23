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

registerN("keydown", (elt) => {
    console.log(elt);
    sendRequest("http://192.168.1.101:5000","scoreboard0-team1-scoreup")
});

$(".loading").hide();