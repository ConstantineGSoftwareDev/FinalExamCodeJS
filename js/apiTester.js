// create constants to get elements from my html
const submitButton = document.querySelector("#submitButton");
const tableBody = document.querySelector("#tableBody");
const userInput = document.querySelector(".userInput");

// function that fetches the movies from the API
function fetchDataFromAPI() 
{
    // create constants for baseURL, api key, user's input
    const baseURL = "https://priyansht.github.io/24W-JavaScript-Week14/product.json";
    const key = "8127fd11";
    const userSearch = userInput.value;

    if (userSearch === "") 
    {
        alert("Please enter a movie name to be searched!");
    } 
    else 
    {
        // create the complete url
        const url = `${baseURL}`;
        console.log(url);

        // fetch request to the complete url
        fetch(url).then(response => response.json()).then(json => displayPosts(json));
    }
}

// function to display the movies to dom
function displayPosts(json) 
{
    console.log(json.products);

    const postsArray = json.products;
  
    // loop through the movies array
    for (let i = 0; i < postsArray.length; i++)
    {
        
        console.log(postsArray[i]);
        const imageTagsArray = [];
        // create the elements for the table
        
        const tableRow = document.createElement("tr"); // <tr></tr>
        
        const prodId = document.createElement("td");
        const prodTitle = document.createElement("td");
        const prodBrand = document.createElement("td");
        const prodCatagory = document.createElement("td");
        const prodDescription = document.createElement("td");
        const prodDiscountPercentage = document.createElement("td");

        
        const prodImageTwo = document.createElement("td");
        const prodImageThree = document.createElement("td");
        const prodImageFour = document.createElement("td");
        const prodImageFive = document.createElement("td");

        prodId.textContent = postsArray[i].id;
        prodTitle.textContent = postsArray[i].title;
        prodBrand.textContent = postsArray[i].brand;
        prodCatagory.textContent = postsArray[i].category;
        prodDescription.textContent = postsArray[i].description;
        prodDiscountPercentage.textContent = postsArray[i].discountPercentage;


        
        tableRow.appendChild(prodId);
        tableRow.appendChild(prodTitle);
        tableRow.appendChild(prodBrand);
        tableRow.appendChild(prodCatagory);
        tableRow.appendChild(prodDescription);
        tableRow.appendChild(prodDiscountPercentage);

        postsArray[i].images.forEach(value => {
            const img = document.createElement('img');
            img.src = value;
            const prodImage = document.createElement("td");
            prodImage.appendChild(img);
            tableRow.appendChild(prodImage);
        })
        tableBody.appendChild(tableRow);
        /*
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
        */
    }
    
}

// add event listener for button click
submitButton.addEventListener("click", fetchDataFromAPI);