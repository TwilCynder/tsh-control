export function sendRequest(addr, text){
    console.log("Sending : " + addr + "/" + text)
    return fetch(addr + "/" + text);
}