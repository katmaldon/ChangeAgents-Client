
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
        <p class="cardText"> ${e.location}</p>
        <p class="cardText">${e.date}</p>
        <p class="cardText">${e.time}</p>

      </div>
      <div class="back">
        <h3>${e.info}</h3>
        <a href="${e.url}">${e.url}</a>
        <br>
        <button class="eventsBtn" type="submit">Add to my events</button>

      </div>
    </div>
  </div>`;

  div.append(eventDiv);

    });
  }

  events.addEventListener('click', () => {
    session_user_id = 1
    fav_event_id = event.target.parentNode.id

    console.log(event.target.parentNode.id)
    if(event.target.className === "eventsBtn") {

        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({
                user_id: session_user_id,
                event_id: fav_event_id
            })
        }

        fetch("http://localhost:3000/user_events", options)
        .then(response => response.json())
        .then(renderEvents(json))
    }

  })


  events.addEventListener('click', () =>{
    profileCards.innerHTML =""
    div.innerHTML = ""
   fetch('http://localhost:3000/events')
    .then(resp => resp.json())
    .then(json => renderEvents(json));

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
  const profileCards = document.querySelector('.profileCards');

  function renderEvents(json){

    json.forEach( e => {
    let volunteerDiv = document.createElement('div')
    volunteerDiv.innerHTML = `
    <div class="container">
    <div class="card" id=${e.id} onclick="flip(event)">
      <div class="front">

        <h1 class="cardTitle">${e.title}</h1>
        <p class="cardText"> ${e.location}</p>


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
  let body = document.querySelector('body')
  body.style.cssText = `
  background-image: none;`
    profileCards.innerHTML =""
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
  <h3>${greeting[Math.round(Math.random() * 3)]} ${json.location}, New York</h3>
 `
//renderEventsDiv
//renderDonationDiv
myEvents.innerHTML = `
<h1>Your Events</h1>
${renderEvents()}
`

donationDiv.innerHTML = `
${renderDonations()}
`
profileCards.append(donationDiv);
profileCards.append(myEvents);
}



function renderEvents(json){

return `
<button>−</button>
<div class="container">
    <div class="card" id=# onclick="flip(event)">
      <div class="front">

        <h1 class="cardTitle">Justice For Breonna Taylor</h1>
        <p class="cardText">Maria Hernandez Park</p>
        <p class="cardText" >6pm</p>
        <p class="cardText" >11237</p>

      </div>
      <div class="back">
        <h4>A gathering to demand justice for Breonna. Rain or shine.</h4>
        <p class="sub">Meeting at Maria Hernandez and marching to Bed Stuy Precinct.</p>
        <a href="https://www.buzzfeednews.com/article/emaoconnor/breonna-taylor-protest-brooklyn-police-brutality">More Info</a>

      </div>
    </div>
  </div>
<button type="button" class="event-btn">Add Event</button>
`

}

function renderDonations(){

  return `
  <button>−</button>
  <h1>Your Donations</h1>
  <a href="https://www.gofundme.com/f/georgefloyd">George Floyd Memorial Fund</a> <span>$</span>
  <br>
  <a href="https://www.artsbusinesscollaborative.org/asp-products/the-okra-project-sponsored-project/">The Okra Project</a> <span>$</span>
  <br>
  <a href="https://www.classy.org/give/77372/#!/donation/checkout">Girls Who Code</a> <span>$</span>

  `

}



function profileClick(){
const profile = document.querySelector('.profile');
profile.addEventListener('click', () => {
  let body = document.querySelector('body')
  body.style.cssText = `
  background-image: none;`
    fetch('http://localhost:3000/users/1')
    .then(resp => resp.json())
    .then(json => renderProfile(json))
    ;
});

}

profileClick();

function transition(){
  const imgArr = ["https://assets.tvo.org/prod/s3fs-public/styles/full_width_1280/public/article-thumbnails/Black-Lives-Matter.jpg?EnUPuFwVloAYHIB.QK3q50EdkrQ9ovFU", "https://i.imgur.com/MI68j2w.jpg","https://api.time.com/wp-content/uploads/2019/03/march.jpeg?w=2000", "https://storiescdn.hornet.com/wp-content/uploads/2019/03/04133403/act-up.jpg", "https://public-media.si-cdn.com/filer/73/71/7371489a-5997-4c12-955c-852a71c05256/ed4f1k.jpg"]
  let body = document.querySelector('body')
  let bg1 = document.createElement('img')
  let button = document.querySelector('#clicker')
  let index = 0
  bg1.className = bg1
  button.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(e.target)
    console.log("clicking")
      if (index < imgArr.length -1 ){
        e.preventDefault()
      index++
      body.style.cssText = `
      background-image: url('${imgArr[index]}');
      `
      }
      else {
        e.preventDefault()
        index = 0
        body.style.cssText = `
        background-image: url('${imgArr[index]}');
        `
      }
  })

}



transition()


document.addEventListener('click', (e) =>{
  let btn = document.querySelector('.event-btn')
  let event = document.querySelector('.my-events')
  if (e.target.className === "event-btn"){
    let newDiv = document.createElement('div')
    let formDiv = document.createElement('div')
    formDiv.innerHTML = `
    <form>
      <label>Title</label><br>
      <input type="text" id="#" name="#"><br>
      <label>Location</label><br>
      <input type="text" id="#" name="#">
      <label>Zip</label><br>
      <input type="number" id="#" name="#">
      <label>Info</label><br>
      <input type="text" id="#" name="#">
      <input type="submit">
  </form>
    `
    event.innerHTML = ""

    newDiv.append(formDiv)
    event.append(newDiv)

  }
})
