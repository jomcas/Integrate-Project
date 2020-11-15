let url = "";

// UNIT 1": HUMAN BODY PARTS
if (
  sessionStorage.getItem("ID") == 1 &&
  sessionStorage.getItem("lessonID") == 1
) {
  url = "https://www.youtube.com/embed/eyp-sgodg94?controls=0";
  youtubeVid(url);
} else if (
  sessionStorage.getItem("ID") == 1 &&
  sessionStorage.getItem("lessonID") == 2
) {
  url = "https://www.youtube.com/embed/k9OqTFZMs2s?controls=0";
  youtubeVid(url);
  createAssessmentBtn();
}

// UNIT 2: LIVING THINGS
else if (
  sessionStorage.getItem("ID") == 2 &&
  sessionStorage.getItem("lessonID") == 1
) {
  url = "https://www.youtube.com/embed/SmlumMnd-eY?controls=0";
  youtubeVid(url);
} else if (
  sessionStorage.getItem("ID") == 2 &&
  sessionStorage.getItem("lessonID") == 2
) {
  url = "https://www.youtube.com/embed/94DTODVYrx8?controls=0";
  youtubeVid(url);
  createAssessmentBtn();
}

// UNIT 3: PLANTS
else if (
  sessionStorage.getItem("ID") == 3 &&
  sessionStorage.getItem("lessonID") == 1
) {
  url = "https://www.youtube.com/embed/caAg-2LjIVM?controls=0";
  youtubeVid(url);
  createAssessmentBtn();
}

// UNIT 4: ANIMALS
else if (
  sessionStorage.getItem("ID") == 4 &&
  sessionStorage.getItem("lessonID") == 1
) {
  url = "https://www.youtube.com/embed/jcXIoN8Jq-8?controls=0";
  youtubeVid(url);
} else if (
  sessionStorage.getItem("ID") == 4 &&
  sessionStorage.getItem("lessonID") == 2
) {
  url = "https://www.youtube.com/embed/0Y4HF66NiPU?controls=0";
  youtubeVid(url);
} else if (
  sessionStorage.getItem("ID") == 4 &&
  sessionStorage.getItem("lessonID") == 3
) {
  url = "https://www.youtube.com/embed/GOXQcm8mnXg?controls=0";
  youtubeVid(url);
} else if (
  sessionStorage.getItem("ID") == 4 &&
  sessionStorage.getItem("lessonID") == 4
) {
  url = "https://www.youtube.com/embed/e8eBkUIC4-4?controls=0";
  youtubeVid(url);
  createAssessmentBtn();
}

// UNIT 5: NON-LIVING THINGS
else if (
  sessionStorage.getItem("ID") == 5 &&
  sessionStorage.getItem("lessonID") == 1
) {
  url = "https://www.youtube.com/embed/vz62QZlVpqw?controls=0";
  youtubeVid(url);
  createNextBtn();
} else if (
  sessionStorage.getItem("ID") == 5 &&
  sessionStorage.getItem("lessonID") == 2
) {
  // weather
  url = "https://www.youtube.com/embed/sn6GLgaTY0M?controls=0";
  youtubeVid(url);
} else if (
  sessionStorage.getItem("ID") == 5 &&
  sessionStorage.getItem("lessonID") == 3
) {
  url = "https://www.youtube.com/embed/AUinjnfsDH8?controls=0";
  youtubeVid(url);
} else if (
  sessionStorage.getItem("ID") == 5 &&
  sessionStorage.getItem("lessonID") == 4
) {
  url = "https://www.youtube.com/embed/CJkw3T1IzYk?controls=0";
  youtubeVid(url);
  createAssessmentBtn();
} else {
}

function youtubeVid(url) {
  let container = document.createElement("div");
  container.className = "container";
  container.setAttribute("style", "width:100%;height:80%");

  let framePane = document.createElement("iframe");
  framePane.setAttribute("style", "width:100%;height:100%");
  framePane.setAttribute("src", url);
  // framePane.setAttribute("frameborder","0");
  // framePane.setAttribute("allow","accelerometer");
  // framePane.setAttribute("allow","autoplay");
  // framePane.setAttribute("allow","clipboard-write");
  // framePane.setAttribute("allow","encrypted-media");
  // framePane.setAttribute("allow","gyroscope");
  // framePane.setAttribute("allow","picture-in-picture");
  // framePane.setAttribute("allowfullscreen");

  //video frame edit here
  var el = document.getElementById("marker");
  el.setAttribute("style", "width:60%;height:100%;margin:auto;");
  container.appendChild(framePane);

  el.appendChild(container);
}

function powerpoint(url) {
  var el = document.getElementById("container");
  el.setAttribute("style", "width:100%;height:100%");
  el.innerHTML =
    '<iframe src="' +
    url +
    '/_layouts/15/Doc.aspx?sourcedoc={25063ca0-8135-448e-9bef-64f0ef613e66}&amp;action=embedview&amp;wdAr=1.4148802017654476" width="1089px" height="793px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>';
}

function hi() {
  window.location.href = "../Science Page/assessment_sci.html";
}

function nextButtonLoc() {
  window.location.href = "../Science Page/assessment_sci.html";
}

function createAssessmentBtn() {
  // creating button element
  var myDiv = document.getElementById("marker");
  // creating text to be
  var button = document.createElement("BUTTON");
  //displayed on button
  var text = document.createTextNode("Assessment");

  // button style
  var style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML =
    ".createAssessmentBtn  { position: absolute; top:85%;" +
    "left: 45%;" +
    "background-color: yellow; color: black;" +
    "text-align: center;border-color: white;height: 50px ! important;" +
    "width: 140px;border-radius: 50px;padding: 10x 17px; border-width: thin" +
    "margin: auto;}";
  document.head.appendChild(style);
  button.className = "createAssessmentBtn";

  // appending text to button
  button.appendChild(text);
  button.onclick = hi;
  // appending button to div
  myDiv.appendChild(button);
}

function createNextBtn() {
  var nextDiv = document.getElementById("next-btn");
  var nextBtn = document.createElement("BUTTON");
  var text = document.createTextNode("Next");
  nextBtn.appendChild(text);
  button.onclick = nextButtonLoc;
  nextDiv.appendChild(nextBtn);
}
