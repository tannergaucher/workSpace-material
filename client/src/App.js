import React from 'react';
import './App.css';
import GoogleMap from './components/GoogleMap';
import NavBar from './components/NavBar';
import CreateSpaceForm from './components/CreateSpaceForm';
import SpaceCards from './components/SpaceCards';

import sample from './sample-spaces'
import axios from 'axios';
import EditSpaceForm from './components/EditSpaceForm';

class App extends React.Component {

  constructor(){
    super()

    this.state = {
      spaces: {},
      loading: false,
      createSpace: true,
      nameInput: '',
      locationInput: '',
      ratingInput: '',
      descriptionInput: '',
      imageInput: '',
      test: {}
    }

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
    this.setState({ spaces: sample })
    // //call api 
    console.log('mounted')
    axios.get('/getWorkspaces')
      .then((response) => {
        console.log(response);
        this.setState({test: response})
      })
      .catch((err) => {
        console.log(err)
      })
  }
  
  render() {
    return (
      <div className="App" style={{height: '100vh'}}>
        <NavBar
          title={`work{Space}`}
        />
        <GoogleMap/>
        <CreateSpaceForm
          handleChange={this.handleChange}
          addSpace={this.addSpace}
          details={this.state}
          style={{display: 'none'}}
        />
        <ul style={{display: 'none'}}>
          {Object.keys(this.state.spaces).map(key => (
            <SpaceCards
              key={key}
              index={key}
              details={this.state.spaces[key]}
              handleChange={this.handleChange}
              updateSpace={this.updateSpace}
              deleteSpace={this.deleteSpace}
            />
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
