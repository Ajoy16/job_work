# Getting Started with Create React App  <br>
#   j o b _ w o r k  <br>
## Project Description:  <br>
It is a project of searching plane ticket and buying ticket online . <br>

## Technologies Used: <br>
I used Tailwind CSS and ReactJS to build this website.I also use Hero Icon libraries and React Router Dom for this project. <br>
## live project link: https://myjobtaskone.netlify.app/ <br>

## Build Process  <br>
At first i use this command npx create-react-app my-project to create a react project then cd my-project use this comand in cmd and after then i use this command npm start 

I have created an example navbar with many links, but it is simply for displays. I do not connect those pages. If you would want, I can make that.Additionally, I design several routes that are one-way, multi-city, and round-trip. Then i create a table format, so that i can show those data in this.I fetch those data and converted into json formet so that i can map your data and show that data.i keep those data in a folder containing a file flight_data.js. By using mapping method i display those data in the table form.i create function called  getFlights that takes filterOptions as its parameter.It checks if filterOptions is provided; if not, it returns all flights. If filterOptions are provided, it calls another function filterFlights with flights and filterOptions as arguments.The filterFlights function takes an array of flights and an object params containing filter criteria such as departureIataCode, arrivalIataCode, and departureAt. It iterates over each flight, its itineraries, and segments. For each segment, it checks if the segment meets the filter criteria specified in params.i create an array called conditions to hold the conditions based on the filter options provided. For each segment, it checks if 
 departureIataCode matches the segment's departure IATA code,arrivalIataCode matches the segment's arrival IATA code,departureAt matches the segment's departure time.If any of these conditions are specified in filterOptions, it checks if they are true for each segment. It then logs the conditions and their evaluation results. Thats how my search bar work. there i createbutton for buy ticket it is only demo . <br>

## Some images of this Project <br>
<img src="https://i.postimg.cc/g2YnK9Cs/Capture-project.png" width = "100%">



 
