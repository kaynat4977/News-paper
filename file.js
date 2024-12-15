const Extracontent = document.getElementById("Extracontent")
const readMoreLink = document.getElementById("readMoreLink")
  
readMoreLink.onclick = () =>{
    if(Extracontent.style.display === "none"){
        Extracontent.style.display = "inline";
        readMoreLink.textcontent = "Read less";
    } else {
        Extracontent.style.display = "none";
        readMoreLink.textcontent  ="Read More";
    }
};

readMoreLink1.onclick = () =>{
    if(Extracontent1.style.display === "none"){
        Extracontent1.style.display = "inline";
        readMoreLink1.textcontent = "Read less";
    } else {
        Extracontent1.style.display = "none";
        readMoreLink1.textcontent  ="Read More";
    }
};

readMoreLink2.onclick = () =>{
    if(Extracontent2.style.display === "none"){
        Extracontent2.style.display = "inline";
        readMoreLink2.textcontent = "Read less";
    } else {
        Extracontent2.style.display = "none";
        readMoreLink2.textcontent  ="Read More";
    }
};

readMoreLink3.onclick = () =>{
    if(Extracontent3.style.display === "none"){
        Extracontent3.style.display = "inline";
        readMoreLink3.textcontent = "Read less";
    } else {
        Extracontent3.style.display = "none";
        readMoreLink3.textcontent  ="Read More";
    }
};