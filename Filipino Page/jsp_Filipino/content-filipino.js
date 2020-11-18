let url = "";

// UNIT 1": ALPABETONG PILIPINO
if (
  sessionStorage.getItem("ID") == 1 &&
  sessionStorage.getItem("lessonID") == 1
) {
  url = "http://www.youtube.com/embed/wTpyyh3541k";
  youtubeVid(url);
  createAssessmentBtn();


}

// UNIT 2: PAGBUO NG SALITA
else if (
  sessionStorage.getItem("ID") == 2 &&
  sessionStorage.getItem("lessonID") == 1
) {
  url = "http://www.youtube.com/embed/i1rxMVi1Xrs";
  youtubeVid(url);
  createAssessmentBtn();
}

// UNIT 3: BUWAN AT ARAW
else if (
  sessionStorage.getItem("ID") == 3 &&
  sessionStorage.getItem("lessonID") == 1
) {
  url = "http://www.youtube.com/embed/efw2MrZX-bA";
  youtubeVid(url);
  createAssessmentBtn();
}

// UNIT 4: MGA KULAY AT HUGIS
else if (
  sessionStorage.getItem("ID") == 4 &&
  sessionStorage.getItem("lessonID") == 1
) {
  url = "http://www.youtube.com/embed/evAoUR3enHI";
  youtubeVid(url);
  createAssessmentBtn();
} 


// UNIT 5: URI NG PRUTAS
else if (
  sessionStorage.getItem("ID") == 5 &&
  sessionStorage.getItem("lessonID") == 1
) {
  url = "http://www.youtube.com/embed/WLJoh6sH83E";
  youtubeVid(url);
  createNextBtn();
}

function youtubeVid(url) {
  let container = document.createElement('div');
    container.className = "container";
    container.setAttribute("style", "width:100%;height:80%");


    let framePane = document.createElement('iframe');
    framePane.setAttribute("style", "width:100%;height:100%");
    framePane.setAttribute("src", url);


    var el = document.getElementById('container');
    el.setAttribute("style", "width:100%;height:100%");
    container.appendChild(framePane);

    el.appendChild(container);
}

function hi() {
  window.location.href = "../Filipino Page/assessment_fil.html";
}

function nextButtonLoc() {
  window.location.href = "../Filipino Page/assessment_fil.html";
}

function createAssessmentBtn() {
    var myDiv = document.getElementById("marker");
    // creating button element  
    var button = document.createElement('assessbutton');  // sa part na to sean check mo
    // creating text to be 
    //displayed on button 
    var text = document.createTextNode("Assessment");
    
    // appending text to button 
    button.appendChild(text);
    button.onclick = hi;
    // appending button to div 
    myDiv.appendChild(button);
}

