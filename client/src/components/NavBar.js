import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import AddCircleIcon from '@material-ui/icons/AddCircle';

import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

import Search from './Search';
import LogInForm from './LogInForm';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  appBar: {
    borderBottom: '1px solid black',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'white',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navLinks: {
    display: 'flex',
  },
  navLink: {
    marginRight: '10px'
  }

};

function NavBar(props) {
  
  const { classes } = props;


  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static" elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="title"><Link to="/">{props.title}</Link></Typography>
          <Search/>
          <div className={classes.navLinks}>
            <Link to="/addSpace" className={classes.navLink}>
              <Typography>Add</Typography>
            </Link>
            <Link to="/top" className={classes.navLink}>
              <Typography>Explore</Typography>
            </Link>
            <Link to="/favorites" className={classes.navLink}>
              <Typography>Favorites</Typography>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
