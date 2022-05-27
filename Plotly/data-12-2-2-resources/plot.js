console.log(cityGrowths);

// Sort the cities in descending order of population growth.
// Select only the top five cities in terms of growth.
// Create separate arrays for the city names and their population growths.
// Use Plotly to create a bar chart with these arrays.

//sort cities
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse();

//select top 5
var topFiveCities = sortedCities.slice(0,5);

// Create separate arrays for the city names and their population growths.
var topFiveCityNames = cityGrowths.map(city => city.City);
//That is why parseInt(city.Increase_from_2016)converts strings into integers
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));

// Use Plotly to create a bar chart with these arrays.
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);