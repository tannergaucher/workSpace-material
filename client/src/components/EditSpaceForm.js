import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';


const styles = theme => ({
  input: {
    margin: theme.spacing.unit,
  },
  addForm: {
    display: 'flex',
    flexDirection: 'column',
    width: 555,
    border: '1px solid black',
  },
});

class EditSpaceForm extends React.Component {

    handleChange = e => {
        const updatedSpace = {
            ...this.props.space,
            [e.currentTarget.name]: e.currentTarget.value 
        };
        this.props.updateSpace(this.props.index, updatedSpace)
    }

    saveUpdatedToDb = () => {
        console.log('saving updated to db')

        console.log(this.props.id)
        axios.post(`/update/${this.props.id}`, {
            // id: this.props.id,
            name: this.props.name,
            location: this.props.location,
            rating: this.props.rating,
            description: this.props.description,
            image: this.props.image
        })

        this.props.handleEditClick();
    }

    deleteFromStateAndDb = () => {
        //state
        this.props.deleteSpace(this.props.index)
        //mongo
        axios.post(`/delete/${this.props.id}`)

    }

    
    render(){
        const { classes } = this.props;

        return (
                <div className={classes.addForm}>
                <Input
                    placeholder="Name"
                    name="name"
                    onChange={this.handleChange}
                    value={this.props.name}
                />
                <Input
                    placeholder="Location"
                    name="location"
                    onChange={this.handleChange}
                    value={this.props.location}

                />
                <Input
                    placeholder="Rating"
                    name="rating"
                    onChange={this.handleChange}
                    value={this.props.rating}
                />
                <Input
                    placeholder="Description"
                    name="description"
                    onChange={this.handleChange}
                    value={this.props.description}
                />
                <Input
                    placeholder="Image"
                    name="image"
                    onChange={this.handleChange}
                    value={this.props.image}
                />
                <Button onClick={this.saveUpdatedToDb}>Save</Button>
                <Button onClick={this.deleteFromStateAndDb}>Delete Space</Button>
                </div>
          );
    }
}

EditSpaceForm.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(EditSpaceForm)
