export function sendRequest(addr, text){
    console.log("Sending : " + addr + "/" + text)
    fetch(addr + "/" + text);
}