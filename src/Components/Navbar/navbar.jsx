import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import {Link, useLocation} from 'react-router-dom';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import logo from '../../Assets/Logo.png';

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    return(
        <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography  to="/" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="commerce.js" height="25px" className={classes.image} /> E-Commerce
          </Typography>
          <div className={classes.grow} />
          { (
          <div className={classes.button}>
            <IconButton  to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems == 0 ? "0": totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
          )}
        </Toolbar>
      </AppBar>
    )
}

export default Navbar;