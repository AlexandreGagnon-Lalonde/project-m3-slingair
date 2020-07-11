When i am stuck I usually look at the main strategy used by other students to see where I mess up

- I am trying to create a dropdown menu for the flights but i am having trouble 
  linking my server to the ejs file
  - Solved by changing solutions, implement directly in js file fetched data 
    from an endpoint instead of creating ejs
  -   let flights = await fetch('/slingair/flights');
      let data = await flights.json();
    - make sure that the flights are the same (usually called response)

- Trouble when i try to make seats unavailable, loop through array of objects and see status
  - req.params.NAME to obtain url query
  - double check data structure to access the right data

- seats array is waiting for fetch hence I cant look the status in time
  - try to read all of comments because one of the TODO had a hint of how to do what im trying to do
  - fetch the seats in another function before the renderSeat one is called
  - dont fetch or async await in a for loop

- forgot how fetch with post work so I have to revisit old workshop/project to figure it out
  - fetch( path, object with method, data and headers for data type)
  - make sure to send back status otherwise wont change page

- redirect post response to ejs file
  - change of plan considering another students solution
  - fetch the data from specific id and render confirmed with that data

- I find it really hard to organize everything together and I often find myself entangled in 
  the logic behind everything... I can understand everything when I have the code but I have trouble starting almost every step without getting inspiration from someone...

- definitely need more practice starting projects by myself, other than that I am confident with my ability to understand
  all kinds of code. I will try to double the amount of coding until the end of the bootcamp. How? First, i'll finish 
  the udemy course that I started. I was actually at the node part of the course before this one started