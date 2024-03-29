import React,{Component} from 'react';
import './App.css';
import Navbar from './component/Navbar';
import whiskey from './image/whiskey.jpg';
import hazel from './image/hazel.jpg';
import tubby from './image/tubby.jpg';
import {Switch,Route} from 'react-router-dom';
import DogList from './component/DogList';
import DogDetail from './component/DogDetail';
class  App extends Component {
  static defaultProps =  {
    dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Hazel",
      age: 3,
      src: hazel,
      facts: [
        "Hazel has soooo much energy!",
        "Hazel is highly intelligent.",
        "Hazel loves people more than dogs."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is not the brightest dog",
        "Tubby does not like walks or exercise.",
        "Tubby loves eating food."
      ]
    }
    
  ]
}
render(){
  const getDog = props =>{
    let name = props.match.params.name;
    let currentDog = this.props.dogs.find(idx=>
      idx.name.toLocaleLowerCase() ===name.toLowerCase());
      console.log(currentDog);
      return(
        <DogDetail {...props} dog={currentDog}/>
      );
    }
    return (
      <div>
        <Navbar  dogs={this.props.dogs}/>
        <Switch>
          <Route exact path='/dogs' render= {()=> <DogList dogs={this.props.dogs}/>}/>
          <Route exact path ='/dogs/:name' 
          render={getDog}/>
        </Switch>
        
      </div>
    );
  }
}

export default App;
