if (sessionStorage.getItem("ID") === "1") {
    var titles = ["Alpabetong Filipino"];
    var imageLoc = [
      "../Filipino Page/img/alpabeto.png",
    ];
    var subcontent = [
      "Ang alpabetong Filipino ay ang pambansang wika ng Pilipinas at isa sa mga opisyal na wika ng bansa. Ito ay binubuo ng 28 titik. Lima (5) nito ay Patinig atangdalawampu’t tatlo (23) naman ay Katinig.",
      
    ];
    for (var temp = 1; temp <= titles.length; temp++) {
      Populate(temp, titles[temp - 1], imageLoc[temp - 1], subcontent[temp - 1]);
    }
  } else if (sessionStorage.getItem("ID") === "2") {
    var titles = ["Pagbuo ng Bagong Salita"];
    var imageLoc = [
      "../Filipino Page/img/pagbuo.png",
    ];
    var subcontent = [
      "Ang pagbuo ng salita ay ang pag-ulit ng salitang ugat o pagtatambal ng mga salita..",
      
    ];
    for (var temp = 1; temp <= titles.length; temp++) {
      Populate(temp, titles[temp - 1], imageLoc[temp - 1], subcontent[temp - 1]);
    }
  } else if (sessionStorage.getItem("ID") === "3") {
    var titles = ["Buwan at Araw"];
    var imageLoc = ["../Filipino Page/img/buwanataraw.png"];
    var subcontent = [
      "Buwan ang tawag sa isa sa labing-dalawang (12) bahagi ng taon. Ang linggo naman ay isang yunit ng panahon na mas mahaba sa isang araw at mas maiksi sa isang buwan. Ibig sabihin, may labing-dalawang (12) buwan sa isang taon at may pitong (7) araw naman sa loob ng isang linggo.</br>",
    ];
    for (var temp = 1; temp <= titles.length; temp++) {
      Populate(temp, titles[temp - 1], imageLoc[temp - 1], subcontent[temp - 1]);
    }
  } else if (sessionStorage.getItem("ID") === "4") {
    var titles = [
      "Mga Kulay At Hugis",];
    var imageLoc = [
      "../Filipino Page/img/kulayathugis.png",
      
    ];
    var subcontent = [
      "Ang kulay ay may katangiang bahid ng mga bagay na nakikita ng mga mata ng tao. Ang hugis naman ay naglalarawan sa panlabas na katangian ng isang bagay. Ang kulay at hugis ay may kaugnayan sa larangan ng sining at arkitektura..",
    
    ];
    for (var temp = 1; temp <= titles.length; temp++) {
      Populate(temp, titles[temp - 1], imageLoc[temp - 1], subcontent[temp - 1]);
    }
  } else if (sessionStorage.getItem("ID") === "5") {
    var titles = ["Uri ng Prutas"];
    var imageLoc = [
      "../Filipino Page/img/uringprutas.png",
    
    ];
    var subcontent = [
      "Ang prutas ay isa sa mga pangunahing pagkain na nagpapalakas at nagpapasigla ngating katawan.",
      
    ];
    for (var temp = 1; temp <= titles.length; temp++) {
      Populate(temp, titles[temp - 1], imageLoc[temp - 1], subcontent[temp - 1]);
    }
  }
  
  function Populate(temp, Head_title, image_location, subcontent_text) {
    //lesson content
    let container = document.createElement("div");
    container.className = "container-fil";
    container.setAttribute("onclick", "showIDLesson(" + temp + ")");
  
    //div > row
    let container_row = document.createElement("div");
    container_row.className = "row";
  
    //div > column_img
    let container_column_img = document.createElement("div");
    container_column_img.className = "column-img";
  
    //content of column_img
    let imgsrc = document.createElement("img");
    imgsrc.className = "image";
    imgsrc.setAttribute("src", image_location);
    container_column_img.appendChild(imgsrc);
  
    //div  > column_desc
    let container_column_desc = document.createElement("div");
    container_column_desc.className = "column-desc";
  
    //content of column_desc
    let title = document.createElement("h1");
    var titletext = document.createTextNode(Head_title);
    title.appendChild(titletext);
  
    let hrline = document.createElement("hr");
  
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
  
  function showIDLesson(id) {
    // alert(id);
    sessionStorage.setItem("lessonID", id);
    window.location.href = "../Filipino Page/vid-fil.html"};