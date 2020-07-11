// grab all input field from submission
const flightNumber = document.querySelector('#flight')
const seatNumber = document.querySelector('#seat')
const userName = document.querySelector('#name')
const userEmail = document.querySelector('#email')

// look up the url and grab the param 
const urlParams = new URLSearchParams(window.location.search)
const userID = urlParams.get('reservationID')

// fetch all the info from that specific user id
// change innerText from confirmed.html to render page with right info
fetch(`/${userID}`)
  .then(res => res.json())
  .then(data => {
    flightNumber.innerText = data.flight;
    seatNumber.innerText = data.seat;
    userName.innerText = data.givenName;
    userEmail.innerText = data.email;
  })
