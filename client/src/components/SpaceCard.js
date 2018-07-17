import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import EditSpaceForm from './EditSpaceForm';

const styles = {
  card: {
    
    width: 555,
    marginBottom: '3rem',
  },
  title: {
      fontSize: '2rem',
      marginLeft: '.5rem'
  },
  media: {
      height: 0,
      paddingTop: '56.25%' // 16:9
  },
  btns: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}

class SpaceCard extends React.Component{

  constructor(){
    super()

    this.state = {
      edit: false,
    }
  }

  handleEditClick = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  render(){
    const {classes, details} = this.props;
    return(
      <div>
          <Card className={classes.card}>
            <Typography className={classes.title}>
              {details.name}
            </Typography>
            <CardMedia
              className={classes.media}
              image={details.image}
            />
            <CardContent>
                <Typography component="p">
                  {details.description}
                </Typography>
                <Typography component="p">
                  <b>Rating:</b> {details.rating}
                </Typography>
            </CardContent>
            <CardActions className={classes.btns}>
              <Button onClick={this.handleEditClick}>
                Edit
              </Button>
              <Button onClick={this.handleEditClick}>
                X
              </Button>
            </CardActions>
          </Card>
          <div className={classes.editForm} style={(this.state.edit === true) ? {display: 'inline'} : {display: 'none'}}>
            <EditSpaceForm
              space={this.props.space}
              index={this.props.index}
              updateSpace={this.props.updateSpace}
              deleteSpace={this.props.deleteSpace}
              name={this.props.details.name}
              location={this.props.details.location}
              rating={this.props.details.rating}
              description={this.props.details.description}
              image={this.props.details.image}
            />
          </div>
        </div>
  )


  }

    

}

SpaceCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(SpaceCard);