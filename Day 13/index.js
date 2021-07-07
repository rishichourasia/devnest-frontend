var btnTranslate = document.getElementById("btn-translate");
var txtInput = document.getElementById("inputTxt");
var outputDiv = document.getElementById("output");

var serverURl = "https://api.funtranslations.com/translate/shakespeare.json"; 

function addUrl(text){
return serverURl + "?" + "text=" + text
}

function clickHandler(){
    var inputText = txtInput.value;
    console.log(inputText);

    fetch(addUrl(inputText))
        .then(response => response.json())
        .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;   
     })
}

btnTranslate.addEventListener("click", clickHandler)