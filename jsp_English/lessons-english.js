if(sessionStorage.getItem("ID") === "1"){
    var titles=["Oral Language 1","Oral Language 2","Oral Language 3","Oral Language 4","Oral Language 5"];
    var img_loc = [
    "../English Page/img/thumbnail_oral_language.png",
    "../English Page/img/Oral2.png",
    "../English Page/img/Oral3.png",
    "../English Page/img/Oral4.PNG",
    "../English Page/img/Oral5.PNG"
];
    for(var temp= 1;temp<=titles.length;temp++){
        Populate(temp,titles[temp-1], img_loc[temp-1]);
    }
    
}else if(sessionStorage.getItem("ID") === "2"){
    var titles=["Songs","Rhymes","Poems","Stories","Writing"];
    var img_loc = [
    "../English Page/img/phono1.PNG",
    "../English Page/img/phono2.png",
    "../English Page/img/phono3.png",
    "../English Page/img/phono4.PNG",
    "../English Page/img/phono5.png"
    ];
    for(var temp= 1;temp<=titles.length;temp++){
        Populate(temp,titles[temp-1], img_loc[temp-1]);
    }

}else if(sessionStorage.getItem("ID") === "3"){
    var titles=[];
    for(var temp= 1;temp<=titles.length;temp++){
        Populate(temp,titles[temp-1]);
    }
    
}else if(sessionStorage.getItem("ID") === "4"){
    var titles=["Nouns","Pronouns","Vowels and Consonant","Verb Tenses","Adjectives","Prefix and Suffix","Preposition"];
    var img_loc = [
    "../English Page/img/grammar1.PNG",
    "../English Page/img/grammar2.PNG",
    "../English Page/img/grammar3.PNG",
    "../English Page/img/grammar4.PNG",
    "../English Page/img/grammar5.PNG",
    "../English Page/img/grammar6.PNG",
    "../English Page/img/grammar7.PNG"
    ];
    for(var temp= 1;temp<=titles.length;temp++){
        Populate(temp,titles[temp-1], img_loc[temp-1]);
    }
    
}else if(sessionStorage.getItem("ID") === "5"){
    var titles=["Homonyms","Homophones 1","Homophones 2","Synonyms and Antonyms","Vocabulary and Concept Development"];
    var img_loc = [
    "../English Page/img/thumbnail_homonyms.png",
    "../English Page/img/thumbnail_homophones part 2.png",
    "../English Page/img/thumbnail_homophones.png",
    "../English Page/img/thumbnail_synonyms.png",
    "../English Page/img/thumbnail_vocabulary.png"
    ];
    for(var temp= 1;temp<=titles.length;temp++){
        Populate(temp,titles[temp-1], img_loc[temp-1]);
    }
    
}else if(sessionStorage.getItem("ID") === "6"){
    
    var titles=["Listening Comprehension 1","Listening Comprehension 2","Listening Comprehension 3","Listening Comprehension 4","Listening Comprehension 5"];
    var img_loc = [
    "../English Page/img/Lis1.PNG",
    "../English Page/img/Lis2.png",
    "../English Page/img/Lis3.png",
    "../English Page/img/Lis4.png",
    "../English Page/img/Lis5.png"
    ];
    for(var temp= 1;temp<=titles.length;temp++){
        Populate(temp,titles[temp-1], img_loc[temp-1]);
    }
    
}else if(sessionStorage.getItem("ID") === "7"){
    var titles=["Jack and the Beanstalk","The Five W's","The Stone Soup","The Ugly Duckling","The life cycle of a Butterfly"];
    var img_loc = [
    "../English Page/img/read1.PNG",
    "../English Page/img/read2.PNG",
    "../English Page/img/read3.PNG",
    "../English Page/img/read4.PNG",
    "../English Page/img/read5.PNG"
    ];
    for(var temp= 1;temp<=titles.length;temp++){
        Populate(temp,titles[temp-1], img_loc[temp-1]);
    }
}else if(sessionStorage.getItem("ID") === "8"){
    var titles=["Rani's First Day At School","Reba Wants Ice Cream","Goby's noisy friend","The Clever Rabbit ","The Right Way School", "The Magic Mirror", "The Storybook Princess"];  
    var img_loc = [
    "../English Page/img/LangLit1.png",
    "../English Page/img/LangLit2.PNG",
    "../English Page/img/LangLit3.PNG",
    "../English Page/img/LangLit4.PNG",
    "../English Page/img/LangLit5.PNG",
    "../English Page/img/LangLit6.png",
    "../English Page/img/LangLit7.png"
    ];
    for(var temp= 1;temp<=7;temp++){
        Populate(temp,titles[temp-1], img_loc[temp-1]);  
    }
}else if(sessionStorage.getItem("ID") === "9"){
    var titles=["Parts of the Books","Print awareness","Mark it!","What We Like About Stories","What do you do with a Book"];
    var img_loc = [
    "../English Page/img/book1.PNG",
    "../English Page/img/book2.PNG",
    "../English Page/img/book3.PNG",
    "../English Page/img/book4.PNG",
    "../English Page/img/book5.PNG"
    ];
    for(var temp= 1;temp<=5;temp++){
        Populate(temp,titles[temp-1], img_loc[temp-1]);
    }
}else if(sessionStorage.getItem("ID") === "9"){
    var titles=[""];
    for(var temp= 1;temp<=5;temp++){
        Populate(temp,titles[temp-1]);
    }
}

function Populate(temp,Head_title,img_loc){
     //lesson content
let container = document.createElement('div');
container.className = "container-eng";
container.setAttribute("onclick","showIDLesson("+temp+")");

//div > row
let container_row = document.createElement('div');
container_row.className = "row";

//div > column_img
let container_column_img = document.createElement('div');
container_column_img.className = "column-img";

//content of column_img
let imgsrc = document.createElement("img");
imgsrc.className = "image";
imgsrc.setAttribute("src",img_loc);
container_column_img.appendChild(imgsrc);

//div  > column_desc
let container_column_desc = document.createElement('div');
container_column_desc.className = "column-desc";

//content of column_desc
let title = document.createElement("h1");
var titletext = document.createTextNode(Head_title);
title.appendChild(titletext);


let hrline= document.createElement("hr");

let textcontent = document.createElement("h3");
var content = document.createTextNode("Subcontent");
textcontent.appendChild(content);
//

//appendingChild to container_column_desc
container_column_desc.appendChild(title);
container_column_desc.appendChild(hrline);
container_column_desc.appendChild(textcontent);

//appendingChild to container and container_row
container.appendChild(container_row);
container_row.appendChild(container_column_img);
container_row.appendChild(container_column_desc);
document.body.appendChild(container);
}

function showIDLesson(id){
    // alert(id);
    sessionStorage.setItem("lessonID",id); 
    window.location.href = "../English Page/vid-eng.html";

}