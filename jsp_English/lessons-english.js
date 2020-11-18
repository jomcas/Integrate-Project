if(sessionStorage.getItem("ID") === "1"){
    var titles=["Oral Language 1","Oral Language 2","Oral Language 3","Oral Language 4","Oral Language 5"];
    var img_loc = [
    "../English Page/img/thumbnail_oral_language.png",
    "../English Page/img/Oral2.png",
    "../English Page/img/Oral3.png",
    "../English Page/img/Oral4.PNG",
    "../English Page/img/Oral5.PNG"
];

    var subcontent = [
    "In this lesson it will teach you how to use or respond to greetings, leave takings and expressing gratitude and apology.",
    "In this lesson it will teach you how to sing nursery rhymes and kids songs.",
    "In this lesson it will teach you how to have good manners to your elders.",
    "In this lesson it will teach you how to have good manners to the people around you.",
    "In this lesson it will teach you how to sing the feeling song."
];

    for(var temp= 1;temp<=titles.length;temp++){
        Populate(temp,titles[temp-1], img_loc[temp-1], subcontent[temp - 1]);
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

    var subcontent = [
        "In this lesson it will teach you english alphabets through the use of singing.",
        "In this lesson it will teach you the ABC Phonics song through singing.",
        "In this lesson it will tells you poems for kids.",
        "In this lesson it will tells you Phonics english story of A.",
        "In this lesson it will teach you how to write alphabetical letters."
];

    for(var temp= 1;temp<=titles.length;temp++){
        Populate(temp,titles[temp-1], img_loc[temp-1],subcontent[temp - 1]);
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

    var subcontent = [
        "In this lesson it will teach you about noun. Noun is a word and it's a part of speech.",
        "In this lesson it will teach you about pronouns. Pronoun is a word that is used instead of a noun.",
        "In this lesson it will teach you about Vowels & Consonants. There are 26 english alphabet letters, 5 of which are vowels and the rest of the alphabets are consonants.",
        "In this lesson it will teach you how to use Past, Present and Future tense.",
        "In this lesson it will teach you on describing words adjectives. Adjectives are describing words.",
        "In this lesson it will teach you how to use Prefix and Suffix through singing.",
        "In this lesson it will teach you how to use Position Words - Preposition. Preposition is a word that tells us where a person,animal,thing or place is."
];

    for(var temp= 1;temp<=titles.length;temp++){
        Populate(temp,titles[temp-1], img_loc[temp-1],subcontent[temp - 1]);
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

    var subcontent = [
        "In this lesson it will teach you what is homonyms and how will you use it in a sentence.",
        "In this lesson it will teach you what is Homophones and how will you use it in a sentence.",
        "In this lesson it is the continuation of the earlier lesson of Homophones.",
        "In this lesson it will teach you how to use synonyms and antonyms.",
        "In this lesson it will teach you what is vocabulary and concept development, it will also teach you how to implement this lesson in your daily lives."
];

    for(var temp= 1;temp<=titles.length;temp++){
        Populate(temp,titles[temp-1], img_loc[temp-1],subcontent[temp - 1]);
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

    var subcontent = [
        "In this lesson it will teach you on how to listen carefully through the use of listening test.",
        "In this lesson it will teach you on how to listen carefully through the use of listening test.",
        "In this lesson it will teach you on how to listen carefully through the use of listening test.",
        "In this lesson it will teach you on how to listen carefully through the use of listening test.",
        "In this lesson it will teach you on how to listen carefully through the use of listening test."
];

    for(var temp= 1;temp<=titles.length;temp++){
        Populate(temp,titles[temp-1], img_loc[temp-1],subcontent[temp - 1]);
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

    
    var subcontent = [
        "In this lesson you will read and learn the story of Jack and the Beanstalk.",
        "In this lesson you will read and learn the story of The Five W's.",
        "In this lesson you will read and learn the story of The Stone Soup.",
        "In this lesson you will read and learn the story of The Ugly Duckling.",
        "In this lesson you will read and learn the life cycle of a butterfly."
];

    for(var temp= 1;temp<=titles.length;temp++){
        Populate(temp,titles[temp-1], img_loc[temp-1],subcontent[temp - 1]);
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

    var subcontent = [
        "In this lesson you will read and learn the story of Rani's first day at school.",
        "In this lesson you will read and learn the story of Reba wants ice cream.",
        "In this lesson you will read and learn the story of Gaby's noisy friend.",
        "In this lesson you will read and learn the story of The Clever Rabbit.",
        "In this lesson you will read and learn the story of The right way to school.",
        "In this lesson you will read and learn the story of The Magic Mirror.",
        "In this lesson you will read and learn the story of The Storybook princess."
];

    for(var temp= 1;temp<=7;temp++){
        Populate(temp,titles[temp-1], img_loc[temp-1],subcontent[temp - 1]);  
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

    var subcontent = [
        "In this lesson it will teach you the parts of a book using creative stop motion.",
        "In this lesson it will teach you what is a book and how it is used.",
        "In this lesson it will teach you what is a sentence through singing.",
        "In this lesson it will teach you how books are made. many people work together to make a book such as author, illustrator, editor etc.",
        "In this lesson it will teach you how to read Mr. Wiggle's Book."
];

    for(var temp= 1;temp<=5;temp++){
        Populate(temp,titles[temp-1], img_loc[temp-1],subcontent[temp - 1]);
    }
}else if(sessionStorage.getItem("ID") === "9"){
    var titles=[""];
    for(var temp= 1;temp<=5;temp++){
        Populate(temp,titles[temp-1]);
    }
}

function Populate(temp,Head_title,img_loc,subcontent_text){
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
var content = document.createTextNode(subcontent_text);
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

//hello_