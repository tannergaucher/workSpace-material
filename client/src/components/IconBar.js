import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteIcon from '@material-ui/icons/Favorite';


const styles = theme => ({

  iconBar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '3px solid rgba(0, 0, 0, .3)',
    width: '72px',
    marginLeft: '1rem',
    marginTop: 'calc(50vh - 8rem)',
    position: 'fixed',
    zIndex: '2',
  },
  IconBarIcon: {
    fontSize: '1.8rem',
    color: 'black',
    // '&:hover': {
    //   color: 'black',
    // }
  },
  button: {
    margin: theme.spacing.unit,
    background: 'white',
    borderRadius: '1px',
    opacity: '.85',
    // '&:hover': {
    //   opacity: '1',
    //   background: 'black',
    // },
  },
})

const  IconBar = (props) => {
  const { classes } = props;
      return(
        <div className={classes.iconBar}>
        
          <Link to="/addSpace">
            <Button 
              className={classes.button} 
              name="addSpace" 
              variant="fab"
              >
              <AddCircleIcon className={classes.IconBarIcon}/>
            </Button>
          </Link>

          <Link to="/explore">
            <Button 
              className={classes.button}
              name="explore" 
              variant="fab"
              href="/explore"
              >
              <ExploreIcon className={classes.IconBarIcon}/>
            </Button>
          </Link>

          <Link to="/favorites">
            <Button 
              className={classes.button}
              name="favorites" 
              variant="fab"
              href="/favorites"          
              >
              <FavoriteIcon className={classes.IconBarIcon}/>
            </Button>
          </Link>

        </div>
      )
    }


export default withStyles(styles)(IconBar);