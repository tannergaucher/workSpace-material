import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import NavBar from './NavBar';

import axios from 'axios';
import uuid from 'uuid';

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    height: '100vh'
  },
  input: {
    margin: theme.spacing.unit,
  },
  addForm: {
    display: 'flex',
    flexDirection: 'column',
    height: '30%',
    width: '30%',
    border: '1px solid black',
    padding: '1rem',
    margin: '2rem',
  },
});

class CreateSpaceForm extends React.Component {

    createSpace = event => {
        event.preventDefault();
        const spaceId = uuid();

        const space = {
            id: spaceId,
            name: this.props.details.nameInput,
            location: this.props.details.locationInput,
            rating: this.props.details.ratingInput,
            description: this.props.details.descriptionInput,
            image: this.props.details.imageInput
        }
        console.log('space')
        this.props.addSpace(space)

        console.log('axios post req')
        axios.post('/add', {
            id: spaceId,
            name: this.props.details.nameInput,
            rating: this.props.details.ratingInput,
            description: this.props.details.descriptionInput,
            location: this.props.details.locationInput,
            image: this.props.details.imageInput
        })
          .then(function(response){
              console.log(response)
          })
          .catch(function(error){
              console.log(error)
          })
          .then(function(){
              console.log('clearing form')
          })
    }

    render(){
        const { classes } = this.props;
        // const {
        //     nameInput, 
        //     locationInput, 
        //     ratingInput, 
        //     descriptionInput,
        //     imageInput } = this.props.details

        return (
            <div>
                <NavBar
                  title={'Back'}
                />
                <div className={classes.container}>
                    <form onSubmit={this.handleSubmit} className={classes.addForm}>
                    <Input
                        placeholder="Name"
                        name="nameInput"
                        onChange={this.props.handleChange}
                        // value={nameInput}
                    />
                    <Input
                        placeholder="Location"
                        name="locationInput"
                        onChange={this.props.handleChange}
                        // value={locationInput}
                    />
                    <Input
                        placeholder="Rating"
                        name="ratingInput"
                        type="number"
                        onChange={this.props.handleChange}
                        // value={ratingInput}
                    />
                    <Input
                        placeholder="Description"
                        name="descriptionInput"
                        onChange={this.props.handleChange}
                        // value={descriptionInput}
                    />
                    <Input
                        placeholder="Image"
                        name="imageInput"
                        onChange={this.props.handleChange}
                        // value={imageInput}
                    />
                    <Button onClick={this.createSpace}>Add</Button>
                    </form>
                </div>
            </div>
          );
    }
    
}

CreateSpaceForm.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(CreateSpaceForm)
