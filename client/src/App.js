import React from 'react';
import './App.css';
import GoogleMap from './components/GoogleMap';
import NavBar from './components/NavBar';
import IconBar from './components/IconBar';
import FindButton from './components/FindButton';
import CreateSpaceForm from './components/CreateSpaceForm';
import SpaceCard from './components/SpaceCard';

import spaces from './sample-spaces';



class App extends React.Component {

  state = {
    spaces: {},
    loading: false,
    createSpace: true,
    nameInput: '',
    locationInput: '',
    ratingInput: '',
    descriptionInput: '',
    imageInput: '',
  }

  addSpace = space => {
    const spaces = {...this.state.spaces}
    spaces[`space${Date.now()}`] = space;
    this.setState({ spaces })
  }

  updateSpace = (key, updatedSpace) => {
    const spaces = {...this.state.spaces}
    spaces[key] = updatedSpace;
    this.setState({ spaces })
  }

  deleteSpace = key => {
    const spaces = {...this.state.spaces}
    spaces[key] = null
    this.setState({ spaces })
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  componentDidMount(){
    this.setState({spaces})
  }
  
  render() {
    return (
      <div className="App" style={{height: '100vh'}}>
        <NavBar/>
        {/* <IconBar/> */}
        {/* <FindButton/> */}
        <GoogleMap style={(this.state.createSpace === 'true')? {display: 'block'}: {display: 'none'}}/>
        <CreateSpaceForm
          handleChange={this.handleChange}
          addSpace={this.addSpace}
          details={this.state}
        />
        <div className="spaceCards" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          {Object.keys(this.state.spaces).map(key => (
            <SpaceCard
            key={key}
            index={key}
            // change all details
            details={this.state.spaces[key]}
            space={this.state.spaces[key]}
            handleChange={this.handleChange}
            updateSpace={this.updateSpace}
            deleteSpace={this.deleteSpace}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
