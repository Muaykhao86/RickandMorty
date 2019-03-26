import React, {Component} from 'react';
import Card from './components/Card';
import Box from './components/Box';
import Portal from './components/Portal';
import Header from './components/Header';

let charTime = ''; 
let portTime = '';

const initialState = {
name: '',
image:'',
universe:'',
showPort: false,
showChar: false,

};

class App extends Component{
    constructor(){
        super()
        this.state=initialState;
      }
    getCharecter = () => {
      const random = Math.floor(Math.random() * 394);
      const url = `https://rickandmortyapi.com/api/character/${random}/`;
      const portalGun = this.openPortal();
      const showCard = this.cardIsSet();
      const takeCard = this.resetChar();
      const closePortal = this.resetPortal();
      
      
      return(
        fetch(url)
        .then(response => response.json())
        .then(char => this.setState({name:char.name, image: char.image, universe:[random + 135], showChar:true})),
        portalGun,
        showCard,
        takeCard,
        closePortal
        )
      }
      
      resetPortal = () => {
        clearTimeout(portTime);
        portTime = setTimeout(()=> {this.setState({showPort: false})}, 10000);
      }
      resetChar = () => {
        clearTimeout(charTime);
        charTime = setTimeout(()=> {this.setState({showChar: false})}, 8000);
        }
        
        openPortal = () => {
          return this.state.showPort === false ?  this.setState({showPort: true}): null;
        }
        
        cardIsSet = () => {
          return this.state.showChar === false && this.state.image ?  this.setState({showChar: true}): null;
        }
        
       
        render() {

        return(
            <div className="container">
            <Header/>
            <Box PushMe={this.getCharecter}/>
            {this.state.showPort ? <Portal/> : null}
            {this.state.showChar ? <Card Name={this.state.name} Image={this.state.image} Universe={this.state.universe}/>:null}
            </div>
        )
    }
}


export default App;