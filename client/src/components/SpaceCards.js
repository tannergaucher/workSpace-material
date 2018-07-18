import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import EditSpaceForm from './EditSpaceForm';


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 555,
    marginTop: '1.5rem',
    marginBottom: '1.5rem',
    borderRadius: '0px',
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


class SpaceCards extends React.Component{

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
    const { classes } = this.props;
    const {name, image, desc, rating, location  } = this.props.details;

      return(
        <div className={classes.container}>
            <Card className={classes.card} elevation={1}>
              <Typography className={classes.title}>
                {name}
              </Typography>
              <CardMedia
                className={classes.media}
                image={image}
              />
              <CardContent>
                  <Typography component="p">
                    {desc}
                  </Typography>
                  <Typography component="p">
                    <b>Rating:</b> {rating}
                  </Typography>
                  <Typography component="p">
                    {location}
                  </Typography>
              </CardContent>
              <CardActions className={classes.btns}>
                <Button onClick={this.handleEditClick}>
                  Edit
                </Button>
              </CardActions>
            </Card>


          <EditSpaceForm 
            className={classes.container} 
            style={(this.state.edit === 'true') ? {display: 'inline'} : {display: 'none'}}
          />
        </div>
      )
  }
}

export default withStyles(styles)(SpaceCards);