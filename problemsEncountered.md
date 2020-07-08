- I am trying to create a dropdown menu for the flights but i am having trouble 
  linking my server to the ejs file
  - Solved by changing solutions, implement directly in js file fetched data 
    from an endpoint instead of creating ejs
  -   let flights = await fetch('/slingair/flights');
      let data = await flights.json();
    - make sure that the flights are the same (usually called response)

