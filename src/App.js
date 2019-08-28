import React, {Component} from 'react';
import Navigation from './Components/Navigation';
import Logo from './Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import SignIn from './Components/SignIn/Signin';
import NumbOfFaces from './Components/NumbOfFaces/NumbOfFaces';
import Register from './Components/Register/Register';
import Particles from 'react-particles-js';
import {FaceRecognitionList, numFaces} from './Components/FaceRecognition/FaceRecognitionList';
import 'tachyons';
import './App.css';

const particleOptions = {
  particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 1000
        },
        size: {
          value: 3
        }
      }
  }
}

const initialState = {
  input: '',
  imageURL: '',
  box: [],
  route: 'SignIn',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '', 
    entries: 0,
    joined: ''
  }};

class App extends Component{

  constructor(){
    super();
    this.state = {
      input: '',
      imageURL: '',
      box: [],
      route: 'SignIn',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '', 
        entries: 0,
        joined: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({user : {
      id: data.id,
      name: data.name,
      email: data.email, 
      entries: data.entries,
      joined: data.joined
    }});
  }

  calculateFaceLocation = (data) =>{
    const boxObj = [];

    const clarifaiFaceObj = data.outputs[0].data.regions;

    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);

    clarifaiFaceObj.forEach(box => {
      const clarifaiFace = box.region_info.bounding_box;
      var singleFaceBox = {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      };
      boxObj.push(singleFaceBox);
    });

    return boxObj;    
  }

  displayFaceBox = (data) =>{
    this.setState({box: data});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onDetectSubmit = () => {
    this.setState({imageURL : this.state.input});

    fetch('https://floating-garden-97056.herokuapp.com/imageurl', {
          method : 'post',
          headers:{'Content-Type' : 'application/json'},
          body: JSON.stringify({
              input: this.state.input
          })
        })
      .then(response => response.json())
      .then( response => {
        if(response){
          fetch('https://floating-garden-97056.herokuapp.com/image', {
            method : 'put',
            headers:{'Content-Type' : 'application/json'},
            body: JSON.stringify({
                id: this.state.user.id
            })
          })
          .then(response => response.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, {entries : count}))
          })
          .catch(console.log)
        }
          this.displayFaceBox(this.calculateFaceLocation(response))
        })
      .catch( err => console.log(err));
  }

  onRouteChange = (route) => {
    if(route === 'signout'){
      this.setState(initialState)
    } else if (route === 'home'){
      this.setState({isSignedIn : true})
    }
    this.setState({route : route})
  }


  render(){

    const {isSignedIn, imageURL, route, box} = this.state;

    return(
      <div className="App">
        
        <Particles className='particles'
          params={particleOptions}
        />

        <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn}/> 
        {route === 'home'  
        ?  <div>
              <Logo />
              
              <ImageLinkForm 
              onInputChange={this.onInputChange} 
              onDetectSubmit = {this.onDetectSubmit}
              />
              <NumbOfFaces name = {this.state.user.name} entries = {numFaces}/>
              <FaceRecognitionList name={this.state.user.name} box={box} imageURL={imageURL} />
            </div>
        : (
          route === 'SignIn'

          ? <div> <Logo /><SignIn onRouteChange = {this.onRouteChange} loadUser = {this.loadUser}/> </div>
          : <div> <Logo /><Register onRouteChange = {this.onRouteChange} loadUser = {this.loadUser}/> </div>
           )  
        }
      </div>
    );
  }
    
}
export default App;
