const apiKey = "/14uaKLtIOfFyQ9JDameww==ebpwbzlwGz0rfeHN";
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    }

}
let button = document.getElementById("btn");
let theJoke = document.getElementById("joke");



button.addEventListener("click",function getJoke(){
    theJoke.innerText = "Updating..."
    button.disabled = true;
    button.innerText = "waiting..."
fetch("https://api.api-ninjas.com/v1/dadjokes?limit=1",options).then(res=>{
    return res.json()
}).then(data=>{
    theJoke.innerText = data[0].joke;
    button.disabled = false;
    button.innerText = "Tell Me A Joke"
}).catch(error =>{
    console.log(error)
    theJoke.innerText = "Opps!! An error Occured."
})
    
});
    