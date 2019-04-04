import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';

const Planets = [
  { zip: "1"},
  { zip: "2"},
  { zip: "3"},
  { zip: "4"},
  { zip: "5"}
]

class PlanetService extends Component{
  constructor(){
    super();
    this.state = { PlanetData : null };
  }
  componentDidMount(){
    const zip = this.props.zip;
    const apiURL = "https://swapi.co/api/planets/" + zip + "/";
    // const apiURL2 = "https://swapi.co/api/planets/";
    fetch(apiURL)
      .then( res => res.json() )
      .then( json => {this.setState({ PlanetData : json })} )

    // fetch(apiURL2)
    //   .then( res2 => res2.json() )
    //   .then( json2 => {this.setState({ PlanetsAllData : json2 })} )
  }
  render(){
    const PlanetData = this.state.PlanetData;
    // let CardSize = { width: '100px', height='100px' };
    // const PlanetsAllData = this.state.PlanetsAllData;
    if(!PlanetData/* && !PlanetsAllData*/) return <div>Loading...</div>
    return(

      <div className="card">
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">John Smith</p>
        <p className="subtitle is-6">@johnsmith</p>
      </div>
    </div>
  </div>

    <div className="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br/>
      <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
</div>
      
    //   <div className="card">
    //   <header className="card-header">
    //     <p className="card-header-title">
    //       Component
    //     </p>
    //     <a href="#" className="card-header-icon" aria-label="more options">
    //       <span className="icon">
    //         <i className="fas fa-angle-down" aria-hidden="true"></i>
    //       </span>
    //     </a>
    //   </header>
    //   <div className="card-content">
    //     <div className="content">
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
    //       <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
    //       <br>
    //       {/* <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
    //       </br>
    //     </div>
    //   </div>
    // </div>

      // <div>
      //   <h1>
      //     Planet name : {PlanetData.name}
      //   </h1>
      //   <p>
      //     Planet climate : {PlanetData.climate}
      //   </p>
      //   <p>
      //     Planet gravity : {PlanetData.gravity}
      //   </p>
      //   <p>
      //     Planet population : {PlanetData.poopulation}
      //   </p>
      //   {/* <h1>
      //     Planets number : {PlanetsAllData.count}
      //   </h1> */}
      // </div>
      
    );
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      activePlanet: 0,
    }
  }
  render() {
    let activePlanet = this.state.activePlanet;
    let activePlanet2 = 1;
    return (
      <div className="App">
        <PlanetService zip={Planets[activePlanet].zip} key={activePlanet}></PlanetService>
            { Planets.map( (planet ,index) => (
              <button className={index % 2 === 0 ? "button is-danger" : "button"} key={index} onClick={ () => {this.setState({ activePlanet : index })}}>
                {planet.zip}
              </button>
             ))}
        <PlanetService zip={activePlanet2} key={activePlanet2}></PlanetService>
        {/* <div className="inline-block">
          <button className={"button is-danger"} onClick={ () => {this.setState({ activePlanet2 : --activePlanet2 })}}>Previous</button>
          <button className={"button"} onClick={ () => {this.setState({ activePlanet2 : ++activePlanet2 })}}>Next</button>
        </div> */}
      </div>
    );
  }
}

export default App;
