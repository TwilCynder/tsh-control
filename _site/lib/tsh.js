/**
 * @param {string} addr 
 * @param {string} text 
 * @param {any} body 
 * @returns 
 */
export function sendRequest(addr, text, body){
    let props = body ?
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            } :
            {method: "GET"}
    console.log("Sending : " + addr + "/" + text, "with", props);
    return fetch(addr + "/" + text, props);
}