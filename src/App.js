import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.scss';
// import './App.css';
import Header from './components/header';
import PeopleList from './components/PeopleList';
import Footer from './components/footer';
import { fetchList } from './services/ListService';
// import Filters from './components/Filters';
import PersonDetail from './components/PersonDetail';




function App() {
  const [list, setList] = useState([]);
  const [cities, setCities] = useState([]);
  const [sex, setSex] = useState([]);
  const [cityFilter, setCityFilter] = useState([])
  const [sexFilter, setSexFilter] = useState([])

  useEffect(() => {
    fetchList().then(data => {
      setList(data.results)
      setCities(data.results.map(result => result.location.city))
      setSex(data.results.map(result =>
        result.gender))
    })
  }, []);

  const filterCities = (ev) => {
    let selectedCity = ev.target.value;
    let checked = ev.target.checked;
    let indexofCities = cityFilter.indexOf(selectedCity)
    checked === true ? cityFilter.push(selectedCity) : cityFilter.splice(indexofCities, 1)
    setCityFilter([...cityFilter])
  }
  const filterSex = (ev) => {
    let selectedSex = ev.target.value;
    let checked = ev.target.checked;
    let indexofSex = sexFilter.indexOf(selectedSex)
    checked === true ? sexFilter.push(selectedSex) : sexFilter.splice(indexofSex, 1)
    setSexFilter([...sexFilter])
  }


  return (
    <>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path='/' render={() =>
              < div className="List">
                {/* <Filters cities={cities} sex={sex} cityFunction={filterCities} sexFunction={filterSex} /> */}
                {<PeopleList sexSelected={sexFilter} citySelected={cityFilter} list={list} />}
              </div>
            }></Route>
            <Route
              path='/PersonDetail/:id'
              render={routerProps => (
                <PersonDetail list={list} match={routerProps.match}
                />
              )}
            ></Route>
          </Switch >
        </main>

      </div>
      <Footer />
    </>
  );
}

export default App;
