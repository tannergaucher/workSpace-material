import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


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
        // console.log('making a space')

        const space = {
            name: this.props.details.nameInput,
            location: this.props.details.locationInput,
            rating: this.props.details.ratingInput,
            description: this.props.details.descriptionInput,
            image: this.props.details.imageInput
        }
        console.log('space')

        this.props.addSpace(space)
        // event.currentTarget.reset();
    }

    render(){
        const { classes } = this.props;

        return (
            <div className={classes.container}>
                <form onSubmit={this.handleSubmit} className={classes.addForm}>
                <Input
                    placeholder="Name"
                    name="nameInput"
                    onChange={this.props.handleChange}
                    value={this.props.details.nameInput}
                    inputProps={{
                    'aria-label': 'Description',
                    }}
                />
                <Input
                    placeholder="Location"
                    name="locationInput"
                    onChange={this.props.handleChange}
                    value={this.props.details.locationInput}
                    inputProps={{
                    'aria-label': 'Description',
                    }}
                />
                <Input
                    placeholder="Rating"
                    name="ratingInput"
                    onChange={this.props.handleChange}
                    value={this.props.details.ratingInput}
                    inputProps={{
                    'aria-label': 'Description',
                    }}
                />
                <Input
                    placeholder="Description"
                    name="descriptionInput"
                    onChange={this.props.handleChange}
                    value={this.props.details.descriptionInput}
                    inputProps={{
                    'aria-label': 'Description',
                    }}
                />
                <Input
                    placeholder="Image"
                    name="imageInput"
                    onChange={this.props.handleChange}
                    value={this.props.details.imageInput}
                    inputProps={{
                    'aria-label': 'Description',
                    }}
                />
                <Button onClick={this.createSpace}>Add</Button>
                </form>
            </div>
          );
    }
    
}

CreateSpaceForm.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(CreateSpaceForm)
