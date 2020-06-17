

function openNav() {
  document.getElementById("mySidebar").style.width = "300px";
  document.getElementById("main").style.marginLeft = "10px";
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
  const profileCards = document.querySelector('.profileCards')
  const events = document.querySelector('.events');
  const div = document.querySelector('.eventCards');

  function renderEvents(json){
    json.forEach( e => {
    let eventDiv = document.createElement('div');
    eventDiv.innerHTML = `
    <div class="container">
    <div class="card" id=${e.id} onclick="flip(event)">
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
    document.body.setAttribute('class', 'inner');
    profileCards.innerHTML =""
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
  const profileCards = document.querySelector('.profileCards')
  
  function renderEvents(json){
    // let eventTitle = document.createElement('h1');
    
    json.forEach( e => {
    let volunteerDiv = document.createElement('div')
    volunteerDiv.innerHTML = `
    <div class="container">
    <div class="card" id=${e.id} onclick="flip(event)">
      <div class="front">
        <h1 class="cardTitle">${e.title}</h1>
        <p> ${e.location}</p>
        <p>${e.date}</p>
        <p>${e.time}</p>

      </div>
      <div class="back">
        <h4>${e.info}</h4>
        <a href="${e.url}">${e.url}</a>

      </div>
    </div>
  </div>`;
  // eventTitle.textContent = "Resources"
  // div.append(eventTitle)
  div.append(volunteerDiv);
  
    });
  }
  

  volunteer.addEventListener('click', () =>{
    profileCards.innerHTML =""
    document.body.setAttribute('class', 'inner');
    div.innerHTML = ""
    profileCards.innerHTML = ""
   fetch('http://localhost:3000/resources')
    .then(resp => resp.json())
    .then(json => renderEvents(json));
}
);
}
volunteerClick();


//PROFILE LOGIC *********************
function renderProfile(json){
  let greeting = ["Making a difference from ","Taking a stand in ", "Doing your part in ", "Changing the world from ", "Using your voice from "];
  const eventCards = document.querySelector('.eventCards');
  const profileCards = document.querySelector('.profileCards');
  const donationDiv = document.createElement('div');
  const myEvents = document.createElement('div');
  donationDiv.className = "donation";
  myEvents.className = "my-events";
  eventCards.innerHTML = ""
  //figure out how to style the event card div w a 0 height for other pages,
  // or remove without issues.
  profileCards.innerHTML = `
  <h1>Hey, ${json.name}!</h1>
  <p>${greeting[Math.round(Math.random() * 3)]} ${json.location}, New York</p>
  
 `
profileCards.append(donationDiv);
profileCards.append(myEvents);
}

function profileClick(){
const profile = document.querySelector('.profile');

profile.addEventListener('click', () => { 
  document.body.setAttribute('class', 'inner');
    fetch('http://localhost:3000/users/1')
    .then(resp => resp.json())
    .then(json => renderProfile(json));
});

}

profileClick();