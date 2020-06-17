

function openNav() {
  document.getElementById("mySidebar").style.width = "300px";
  document.getElementById("main").style.marginLeft = "300px";
  document.querySelector("body").style.marginLeft = "300px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.querySelector("body").style.marginLeft = "0";
}

function titleColor(){
 let h1Array = Array.from(document.getElementsByTagName('h1'));
 h1Array.forEach(e => {

  e.addEventListener('mouseover', (e) => {
    let element = e.target.id;
    let id1 = document.getElementById('one');
    let id2 = document.getElementById('two');
       id1.style.color = "#7EBDC2";
       id2.style.color = "#BB4430";
     });
     e.addEventListener('mouseout', (e) => {
      let element = e.target.id;
      let id1 = document.getElementById('one');
      let id2 = document.getElementById('two');
         id1.style.color = "#BB4430";
         id2.style.color = "#7EBDC2";
       });
 });
}


  titleColor();

  function eventsClick(){

  const events = document.querySelector('.events');
  const div = document.querySelector('.eventCards');

  function renderEvents(json){
    json.forEach( e => {
    let eventDiv = document.createElement('div');
    eventDiv.innerHTML = `
    <div class="container">
    <div class="card" onclick="flip(event)">
      <div class="front">
        <h1 class="cardTitle">${e.title}</h1>
        <p> ${e.location}</p>
        <p>${e.date}</p>
        <p>${e.time}</p>

      </div>
      <div class="back">
        <h3>${e.info}</h3>
        <a href="${e.url}">${e.url}</a>

      </div>
    </div>
  </div>`;
  div.append(eventDiv);

    });
  }


  events.addEventListener('click', () =>{
    div.innerHTML = ""
   fetch('http://localhost:3000/events')
    .then(resp => resp.json())
    .then(json => renderEvents(json))
}
);
}


function flip(event){
	var element = event.currentTarget;
	if (element.className === "card") {
    if(element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
    }
    else {
      element.style.transform = "rotateY(180deg)";
    }
  }
};
eventsClick();

// VOLUNTEER LOGIC ***********************

 function volunteerClick(){

  const volunteer = document.querySelector('.volunteer');
  const div = document.querySelector('.eventCards');

  function renderEvents(json){
    json.forEach( e => {
    let volunteerDiv = document.createElement('div');
    volunteerDiv.innerHTML = `
    <div class="container">
    <div class="card" onclick="flip(event)">
      <div class="front">
        <h1 class="cardTitle">${e.title}</h1>
        <p> ${e.location}</p>
        <p>${e.date}</p>
        <p>${e.time}</p>

      </div>
      <div class="back">
        <h4>${e.info}</h4>
        <a href="${e.url}">${e.url}</a>
        <br></br>
        <button class="favorite">Save to profile</button>`

      </div>
    </div>
  </div>`;
  div.append(volunteerDiv);

    });
  }


  volunteer.addEventListener('click', () =>{
    div.innerHTML = ""
   fetch('http://localhost:3000/resources')
    .then(resp => resp.json())
    .then(json => renderEvents(json));
}
);
}
volunteerClick()

