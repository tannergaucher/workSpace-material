import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import NavigationIcon from '@material-ui/icons/Navigation';

const styles = theme => ({
  findButtonDiv: {
    position: 'fixed',
    marginTop: '25%',
    marginLeft: '45%',
    zIndex: '3',
  },
  button: {
    margin: theme.spacing.unit,
    background: 'white',
    color: 'black',
    borderRadius: '0px',
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});



function FindButton(props) {

  const { classes } = props;

  const handleClick = () => {
  console.log('clicked')
}



  return (
    <div className={classes.findButtonDiv}>
      <Button 
        variant="extendedFab" 
        aria-label="Find" 
        className={classes.button}
        color="primary"
        onClick={handleClick}
      >
      Near
        <NavigationIcon className={classes.extendedIcon} />
      Me
      </Button>
    </div>
  );
}

FindButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FindButton);
