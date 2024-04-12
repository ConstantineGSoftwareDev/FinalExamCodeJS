// create constants to get elements from my html
const submitButton = document.querySelector("#submitButton");
const tableBody = document.querySelector("#tableBody");
const userInput = document.querySelector(".userInput");

// function that fetches the movies from the API
function fetchDataFromAPI() 
{
    // create constants for baseURL, api key, user's input
    const baseURL = "http://www.omdbapi.com/";
    const key = "8127fd11";
    const userSearch = userInput.value;

    if (userSearch === "") 
    {
        alert("Please enter a movie name to be searched!");
    } 
    else 
    {
        // create the complete url
        const url = `${baseURL}?apikey=${key}&s=${userSearch}`;
        console.log(url);

        // fetch request to the complete url
        fetch(url).then(response => response.json()).then(json => displayMovies(json));
    }
}

// function to display the movies to dom
function displayMovies(json) 
{
    console.log(json);

    const moviesArray = json.Search;
    
    // loop through the movies array
    for (let i = 0; i < moviesArray.length; i++)
    {
        console.log(moviesArray[i]);

        // create the elemets for the table
        const tableRow = document.createElement("tr"); // <tr></tr>
        const imdbIdTd = document.createElement("td"); // <td></td>
        const titleTd = document.createElement("td");  // <td></td>
        const yearTd = document.createElement("td");   // <td></td>
        const posterTd = document.createElement("td"); // <td></td>

        // add data to my td tags
        imdbIdTd.textContent = moviesArray[i].imdbID;
        titleTd.textContent = moviesArray[i].Title;
        yearTd.textContent = moviesArray[i].Year;

        const image = document.createElement("img");      // <img>
        image.setAttribute("src", moviesArray[i].Poster); // <img src="...">
        image.setAttribute("alt", moviesArray[i].Title);
        posterTd.appendChild(image);

        // adding data to table body
        tableRow.appendChild(imdbIdTd);
        tableRow.appendChild(titleTd);
        tableRow.appendChild(yearTd);
        tableRow.appendChild(posterTd);

        tableBody.appendChild(tableRow);
    }
}

// add event listener for button click
submitButton.addEventListener("click", fetchDataFromAPI);