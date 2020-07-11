const flightInput = document.getElementById('flight');
const seatsDiv = document.getElementById('seats-section');
const confirmButton = document.getElementById('confirm-button');

let selection = '';

const flightDropdown = async () => {
  // fetch flight list from this endpoint
  let flights = await fetch('/slingair/flights');
  let data = await flights.json();
  // create html element for each
  data.forEach(number => {
    let option = document.createElement('option');
    option.innerText = number;
    flightInput.appendChild(option)
    option.value = number
  })
} 
flightDropdown()

const renderSeats = (seatData) => {
  // clear old flight seats if user change from dropdown
  let oldSeatElements = document.querySelector('#seats-section');
  // oldSeatElements.innerHTML = ''
  while (oldSeatElements.firstChild) {
    oldSeatElements.removeChild(oldSeatElements.lastChild)
  }
  
  document.querySelector('.form-container').style.display = 'block';

  const alpha = ['A', 'B', 'C', 'D', 'E', 'F'];
  for (let r = 1; r < 11; r++) {
    const row = document.createElement('ol');
    row.classList.add('row');
    row.classList.add('fuselage');
    seatsDiv.appendChild(row);
    for (let s = 1; s < 7; s++) {
      const seatNumber = `${r}${alpha[s - 1]}`;
      const seat = document.createElement('li');

      // Two types of seats to render
      const seatOccupied = `<li><label class="seat"><span id="${seatNumber}" class="occupied">${seatNumber}</span></label></li>`;
      const seatAvailable = `<li><label class="seat"><input type="radio" name="seat" value="${seatNumber}" /><span id="${seatNumber}" class="avail">${seatNumber}</span></label></li>`;

      // TODO: render the seat availability based on the data...
      // seatData is passed from toggleFormContent
      let currentSeat = seatData.find(x => x.id === seatNumber);
        if (currentSeat.isAvailable) {
          seat.innerHTML = seatAvailable
        } else {
          seat.innerHTML = seatOccupied
        } 
      row.appendChild(seat);
    }
  }

  let seatMap = document.forms['seats'].elements['seat'];

  seatMap.forEach((seat) => {
    seat.onclick = () => {
      selection = seat.value;
      seatMap.forEach((x) => {
        if (x.value !== seat.value) {
          document.getElementById(x.value).classList.remove('selected');
        }
      });
      document.getElementById(seat.value).classList.add('selected');
      document.getElementById('seat-number').innerText = `(${selection})`;
      confirmButton.disabled = false;
    };
  });
};

const toggleFormContent = async (event) => {
  let seatData;
  const flightNumber = flightInput.value;
  console.log('toggleFormContent: ', flightNumber);
  // fetch the data for a specific flight
  if (flightNumber.substring(0, 2) === 'SA' && flightNumber.length === 5) {
    try {
      let response = await fetch(`/slingair/flights/${flightNumber}`);
      seatData = await response.json();
    } catch(err) {
      alert('Not a valid flight number.')
    }
  }


  // TODO: contact the server to get the seating availability
  //      - only contact the server if the flight number is this format 'SA###'.
  //      - Do I need to create an error message if the number is not valid?

  // TODO: Pass the response data to renderSeats to create the appropriate seat-type.
  renderSeats(seatData);
};

const handleConfirmSeat = (event) => {
  event.preventDefault();
  // TODO: everything in here!
  fetch('/users', {
    method: 'POST',
    body: JSON.stringify({
      flight: flightInput.value,
      seat: selection,
      givenName: document.getElementById('givenName').value,
      surname: document.getElementById('surname').value,
      email: document.getElementById('email').value
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then(res => res.json())
  .then(data => {
    const { status, error } = data;
    if (status === 'success') {
      window.location = `./confirmed.html?reservationID=${data.id}`

      ////// I do not know how to make this render work so 
      ////// I looked up how some other student did this
      ////// I would've worked with EJS but the final render was a complete
      ////// mystery to me :) hoefully someone reads this but probably not

      // data.render('/seat-select/confirmed', {
      //   flight: flightInput.value,
      //   seat: selection,
      //   givenName: document.getElementById('givenName').value,
      //   surname: document.getElementById('surname').value,
      //   email: document.getElementById('email').value
      // });

    } else if (error) {
      alert('ID not valid.')
    }
  })
};

flightInput.addEventListener('blur', toggleFormContent);
