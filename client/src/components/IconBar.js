import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteIcon from '@material-ui/icons/Favorite';




const handleClick = (e) => {
  console.log(e.target.name, e.target.value)
}

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

function IconBar(props){
  const { classes } = props;
      return(
        <div className={classes.iconBar}>
    
          <Button 
            className={classes.button} 
            name="addSpace" 
            variant="fab"
            onClick={handleClick}
            >
              <AddCircleIcon className={classes.IconBarIcon}/>
          </Button>
          <Button 
            className={classes.button}
            name="explore" 
            variant="fab"
            onClick={handleClick}
            >
              <ExploreIcon className={classes.IconBarIcon}/>
          </Button>
          <Button 
            className={classes.button}
            name="favorites" 
            variant="fab"
            onClick={handleClick}
          
            >
              <FavoriteIcon className={classes.IconBarIcon}/>
          </Button>
        </div>
      )
    }


export default withStyles(styles)(IconBar);