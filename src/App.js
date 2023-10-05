import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CarList from './CarList';
import Pagination from './Pagination';
import Header from './Header';
import Detail from './Detail';
import './App.css';
import data from './data.json'
import Form from './Form';
import CarCard from './CarCard';

// const carsData = [{ id: 1, image: "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg", name: "BMW", year: "2019" },
// { id: 2, image: "https://cdn.pixabay.com/photo/2017/03/05/15/29/aston-martin-2118857_1280.jpg", name: "Audi", year: "2019" }, { id: 3, image: "https://cdn.pixabay.com/photo/2016/12/03/18/57/car-1880381_1280.jpg", name: "Tyota", year: "2019" },
// { id: 4, image: "https://cdn.pixabay.com/photo/2012/06/25/15/34/berlin-wall-50727_1280.jpg", name: "BMW", year: "2019" },
// { id: 5, image: "https://cdn.pixabay.com/photo/2016/09/11/16/47/car-1661767_1280.jpg", name: "Audi", year: "2019" }, { id: 6, image: "https://cdn.pixabay.com/photo/2017/03/17/11/50/car-2151324_1280.jpg", name: "Tyota", year: "2019" },
// { id: 7, name: "BMW", year: "2019" },
// { id: 8, name: "Audi", year: "2019" }, { id: 9, name: "Tyota", year: "2019" },
// { id: 10, name: "BMW", year: "2019" },
// { id: 11, name: "Audi", description: "500 hourse power" }, { id: 12, name: "Tyota", year: "2019" }

// ];

const ITEMS_PER_PAGE = 6;

const App = () => {
  // Calculate total pages based on the number of cars and items per page
  const totalPages = Math.ceil(data.carData.length / ITEMS_PER_PAGE);

  return (
    <Router>
      <Switch>
      <div className="App">
        <Header />
        {/* Route component to handle pagination */}
        {/* <Routes> */}
          {/* <Route
            path="/*" component={CarCard}
          /> */}
        <Route
          path="/page/:pageNumber"
          render={({ match }) => {
            // Extract the page number from the URL parameter or default to page 1
            const pageNumber = parseInt(match.params.pageNumber, 10) || 1;

            // Calculate start and end index for the cars to be displayed on the current page
            const startIndex = (pageNumber - 1) * ITEMS_PER_PAGE;
            const endIndex = startIndex + ITEMS_PER_PAGE;

            // Slice the carsData array to get the cars for the current page
            const displayedCars = data.carData.slice(startIndex, endIndex);

            return (
              <div>
                {/* Render the list of cars */}

                <CarList cars={displayedCars} />

                {/* Render pagination component with current page number and total pages */}

                < Pagination currentPage={pageNumber} totalPages={totalPages} />

              </div>
            );
          }}
        />
        <Route
          path="/car/:id" component={Detail}
        />
          <Route
            path="/form" component={Form}
          />
          
        {/* </Routes> */}
      </div>
      </Switch>
      {/* <h1>iry</h1> */}
    </Router>
  );
};

export default App;