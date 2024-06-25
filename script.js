let count = 0;
const countLabel = document.getElementById("countLabel");
document.getElementById("increase").onclick = function() {
    count++;
    
    countLabel.textContent = count;
};
document.getElementById("decrease").onclick = function() {
    count--;
    countLabel.textContent = count;
};
document.getElementById("reset").onclick = function() {
    count=0;
    countLabel.textContent = count;
};

document.getElementById("generate").onclick = function() {
    const max = Number(document.getElementById("maxInput").value);
    const min = Number(document.getElementById("minInput").value);

    let random = Math.floor(Math.random() * max - min) + min;
    document.getElementById("ranLabel").textContent = random;
    console.log(random);
}

document.getElementById("Roll").onclick = function() {
    let hot = Math.round(Math.random());
    hot = Boolean(hot);
    const hotLabel = document.getElementById("hotLabel"); 
    if(hot){
        hotLabel.innerHTML = "<p>Head <br>🗣️</p>"
    }
    else{
        hotLabel.innerHTML = "<p>Tail <br>👣</p>"
    }}