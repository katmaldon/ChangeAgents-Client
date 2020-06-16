

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
  
  events.addEventListener('click', () =>{
   div.innerHTML = `
   <div class="container">
   <div class="card" onclick="flip(event)">
     <div class="front">
       <h1>This is the front</h1>
       <p> Here is some additional text</p>
     </div>
     <div class="back">
       <h1>This is the back</h1>
     </div>
   </div>
 </div>

 <div class="container">
 <div class="card" onclick="flip(event)">
   <div class="front">
     <h1>This is the front</h1>
     <p> Here is some additional text</p>
   </div>
   <div class="back">
     <h1>This is the back</h1>
   </div>
 </div>
</div>

<div class="container">
<div class="card" onclick="flip(event)">
  <div class="front">
    <h1>This is the front</h1>
    <p> Here is some additional text</p>
  </div>
  <div class="back">
    <h1>This is the back</h1>
  </div>
</div>
</div>

<div class="container">
<div class="card" onclick="flip(event)">
  <div class="front">
    <h1>This is the front</h1>
    <p> Here is some additional text</p>
  </div>
  <div class="back">
    <h1>This is the back</h1>
  </div>
</div>
</div>


<div class="container">
<div class="card" onclick="flip(event)">
  <div class="front">
    <h1>This is the front</h1>
    <p> Here is some additional text</p>
  </div>
  <div class="back">
    <h1>This is the back</h1>
  </div>
</div>
</div>


<div class="container">
<div class="card" onclick="flip(event)">
  <div class="front">
    <h1>This is the front</h1>
    <p> Here is some additional text</p>
  </div>
  <div class="back">
    <h1>This is the back</h1>
  </div>
</div>
</div>
 `
});


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




$('.flip').click(function(){
  $(this).find('.card').addClass('flipped').mouseleave(function(){
      $(this).removeClass('flipped');
  });
  return true;
});