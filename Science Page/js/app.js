const topicTitle = document.querySelector(".topic-title");
const topicDescription = document.querySelector(".topic-desc");
const topicIndicatorContainer = document.querySelector(".container-sci");


function listTopicTitleAvailable() {
    topicIndicatorContainer.innerHTML = '';
    const totalTopicTitle = topics.length;
    for (let i = 0; i < totalTopicTitle; i++) {
        const indicator = document.createElement("div");
        topicIndicatorContainer.appendChild(indicator);
    }
}

window.onload = function () {

    // topic indicator
    listTopicTitleAvailable();
}