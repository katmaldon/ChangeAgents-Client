
function openNav() {
    document.getElementById("mySidebar").style.width = "300px";
    document.getElementById("main").style.marginLeft = "10px";
    document.querySelector("body").style.marginLeft = "300px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.querySelector("body").style.marginLeft = "0";
}

function titleColor() {
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

function eventsClick() {
    const profileCards = document.querySelector('.profileCards')
    const events = document.querySelector('.events');
    const div = document.querySelector('.eventCards');

    function renderEvents(json) {

        json.forEach(e => {
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
        profileCards.innerHTML = ""
        div.innerHTML = ""
        fetch('http://localhost:3000/events')
            .then(resp => resp.json())
            .then(json => renderEvents(json));

    }
    );
}


function flip(event) {
    var element = event.currentTarget;
    if (element.className === "card") {
        if (element.style.transform == "rotateY(180deg)") {
            element.style.transform = "rotateY(0deg)";
        }
        else {
            element.style.transform = "rotateY(180deg)";
        }
    }
};
eventsClick();

// VOLUNTEER LOGIC ***********************

function volunteerClick() {

    const volunteer = document.querySelector('.volunteer');
    const div = document.querySelector('.eventCards');
    const profileCards = document.querySelector('.profileCards');

    function renderEvents(json) {

        json.forEach(e => {
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

    // function aboutClick() {
    //     const aboutDiv = document.querySelector('.aboutField');

    //     document.addEventListener("click", event => {

    //     let body = document.querySelector('body')
    //     body.style.cssText = `
    //     background-image: none;`

    //     aboutDiv.innerHTML = `

    //     ChangeAgents is a community based open source web application for activists and volunteers,
    //     a platform to share events and resources, track your donations, and keep each other
    //     supported and motivated throughout the efforts to build a more equitable and just
    //     society for all.
    //     `

    //     })


    // }

    // aboutClick()



    volunteer.addEventListener('click', () => {
        let body = document.querySelector('body')
        body.style.cssText = `
  background-image: none;
  background-color: #EBEBEB`
        profileCards.innerHTML = ""
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
  <h1 class="name-greet">Hey, ${json.name}!</h1>
  <h3 class="rand-greet1">${greeting[Math.round(Math.random() * 3)]} ${json.location}, New York</h3>
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



function renderEvents(json) {

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

function renderDonations() {

    return `
  <button>−</button>
  <h1>Your Donations</h1>
  <a class="dnte" href="https://www.gofundme.com/f/georgefloyd">George Floyd Memorial Fund</a> <span>$50</span>
  <br>
  <a class="dnte" href="https://www.artsbusinesscollaborative.org/asp-products/the-okra-project-sponsored-project/">The Okra Project</a> <span>$100</span>
  <br>
  <a class="dnte" href="https://www.classy.org/give/77372/#!/donation/checkout">Girls Who Code</a> <span>$60</span>
  <br>
<h2>Current Pledge: $110</h2>
  `

}



function profileClick() {
    const profile = document.querySelector('.profile');
    profile.addEventListener('click', () => {
        let body = document.querySelector('body')
        body.style.cssText = `
  background-image: none;
  background-color: #EBEBEB;`
        fetch('http://localhost:3000/users/1')
            .then(resp => resp.json())
            .then(json => renderProfile(json))
            ;
    });

}

profileClick();

function transition() {
    const imgArr = ["https://assets.tvo.org/prod/s3fs-public/styles/full_width_1280/public/article-thumbnails/Black-Lives-Matter.jpg?EnUPuFwVloAYHIB.QK3q50EdkrQ9ovFU", "https://i.imgur.com/MI68j2w.jpg", "https://api.time.com/wp-content/uploads/2019/03/march.jpeg?w=2000", "https://storiescdn.hornet.com/wp-content/uploads/2019/03/04133403/act-up.jpg", "https://public-media.si-cdn.com/filer/73/71/7371489a-5997-4c12-955c-852a71c05256/ed4f1k.jpg", "https://cdn.aarp.net/content/dam/aarp/politics/events-and-history/2018/02/1140-civil-rights-movements-1963-march.imgcache.rev0592dbf1fe2616b4f127a4f315f14d10.jpg"]
    let body = document.querySelector('body')
    let bg1 = document.createElement('img')
    let button = document.querySelector('#clicker')
    let index = 0
    bg1.className = bg1
    button.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(e.target)
        console.log("clicking")
        if (index < imgArr.length - 1) {
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


document.addEventListener('click', (e) => {
    let btn = document.querySelector('.event-btn')
    let event = document.querySelector('.my-events')
    if (e.target.className === "event-btn") {
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


// USE YOUR VOICE LOGIC ********************

function voiceClick() {
    let voice = document.querySelector(".voice")

    voice.addEventListener("click", () => {
        console.log('cool!')



    })


}
// const eventBtn = document.getElementsByClassName("eventsBtn")

document.addEventListener('click', () => {
    session_user_id = 1
    fav_event_id = event.target.parentNode.id

    console.log(event.target.parentNode.id)
    if (event.target.className === "eventsBtn") {

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
    if (event.target.className === "choice"){
   console.log('clicked')
      let email = document.querySelector('.email-div')
        email.innerHTML = renderForm()
    }

  })


  function voiceClick(){
    let voice = document.querySelector(".voice")
    let div = document.querySelector(".eventCards")
    let body = document.querySelector('body')
    const profileCards = document.querySelector('.profileCards')
    voice.addEventListener("click", () =>{
      profileCards.innerHTML = ""
      div.style.cssText = `display:flex;`
      div.innerHTML = ""
      body.style.cssText = `background-image: none; background-color: #EBEBEB;`
      let emailDiv = document.createElement('div')
      emailDiv.className = "email-div"

      emailDiv.innerHTML = `
      <h1 class="template">Choose Template to Send</h1>
      <a class="choice" href="#">Justice for Breonna Taylor</a>
      <br>
      <a class="choice" href="#">Justice for George Floyd</a>
      <br>
      <a class="choice" href="#">Humanitarian Aid for Yemen</a>
      <br>
      <a class="choice" href="#">Support for Immigrants - Abolish ICE</a>
      <br>
`

      div.append(emailDiv)
})
}


    voiceClick()


    function renderForm(){

      return `<form action="mailto:someone@example.com" method="post" enctype="text/plain">
      Name:<br>
      <input type="text" name="name" placeholder="youremail@example.com"><br>
      E-mail:<br>
      <input type="text" name="mail" value="senator@email.com; governor@email.com; justice@email.com"><br>
      Comment:<br>
    <textarea name="comment" rows="25" cols="50" >
      Hello,
     My name is [YOUR NAME]. I am a resident of [CITY] and I am emailing today to demand accountability for the racist murder of George Floyd.
     [PLEASE ADD YOUR PERSONAL STATEMENT HERE, TO AVOID AUTOMATIC FILTERING! SPEAK FROM THE HEART :) ]

      I demand that charges be pressed against all officers involved in this heinous racist murder, including specifically Derek Chauvin and Tou Thao. They should not be allowed to keep their jobs and should be charged and prosecuted to the fullest extent of the law for manslaughter.

      George Floyd should be alive today if it was not for the gross abuse of power and white supremacy exhibited by the Minneapolis Police Department, all officers involved must face consequences for this murder in order to provide his family with justice and prevent further cops from committing brutal acts of violence against our communities.

      In addition, I demand that we start providing more support towards community efforts and organizations outside of the police forces in order to prevent police brutality and violence in the future.

      Sincerely,
      [YOUR NAME]



      </textarea><br><br>
      <input type="submit" value="Send">
      <input type="reset" value="Reset">
      </form>`
    }
