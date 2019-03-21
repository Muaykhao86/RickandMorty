import React, {Component} from 'react';
import Card from './components/Card';
import Box from './components/Box';
import Portal from './components/Portal';
import Header from './components/Header';

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
        const cardTimer = this.cardIsSet();
          return(
            portalGun,
            cardTimer,
            fetch(url)
            .then(response => response.json())
            .then(char => this.setState({name:char.name, image: char.image, universe:[random + 135], showChar:true}))
            )
      }
      
      resetPortal = () => {
        const portTime = setTimeout(()=>{this.setState({showPort: false})}, 4000);
         return this.state.showPort === true && this.state.showChar === true ? 
         portTime: null;
        }
      resetChar = () => {
          const charTime = setTimeout(()=>{this.setState({showChar: false})}, 8000);
         return   this.state.showChar === true && this.state.showPort === true ? charTime: null
        }

      componentDidmount() {
          
          clearTimeout(this.charTime);
         this.resetChar();
        this.resetPortal();  
      }
      openPortal = () => {
          return this.state.showPort === false ?  this.setState({showPort: true}): null;
        }
        
        cardIsSet = () => {
    
       return this.state.showChar === false ?  this.setState({showChar: true}): null;
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