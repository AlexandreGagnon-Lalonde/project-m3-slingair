const flightNumber = document.querySelector('#flight')
const seatNumber = document.querySelector('#seat')
const userName = document.querySelector('#name')
const userEmail = document.querySelector('#email')

const urlParams = new URLSearchParams(window.location.search)
const userID = urlParams.get('reservationID')
console.log(userID)
fetch(`/${userID}`)
  .then(res => res.json())
  .then(data => {
    flightNumber.innerText = data.flight;
    seatNumber.innerText = data.seat;
    userName.innerText = data.givenName;
    userEmail.innerText = data.email;
  })
