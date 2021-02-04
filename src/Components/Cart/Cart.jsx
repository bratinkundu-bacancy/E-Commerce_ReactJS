import { Container, Typography, Button, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { Link } from "react-router-dom";
import CartItem from "./CartItem/CartItem";

const Cart = ({cart,removeCartItems,subtotal,removeCartItem,updateCartItems}) => {  

  const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    title: {
      marginTop: "5%",
    },
    emptyButton: {
      minWidth: "150px",
      [theme.breakpoints.down("xs")]: {
        marginBottom: "5px",
      },
      [theme.breakpoints.up("xs")]: {
        marginRight: "20px",
      },
    },
    checkoutButton: {
      minWidth: "150px",
    },
    link: {
      textDecoration: "none",
    },
    cardDetails: {
      display: "flex",
      marginTop: "10%",
      width: "100%",
      justifyContent: "space-between",
    },
  }));

  const classes = useStyles();
  const renderEmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,
      <Link className={classes.link} to="/">
        start adding some
      </Link>
      !
    </Typography>
  );

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
              <CartItem cart={item} removeCartItem={removeCartItem} updateCartItems={updateCartItems}/>
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal: ${subtotal}</Typography>
        <div>
          {/* <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={removeCartItems}
          >
            Empty cart
          </Button> */}
          <Button
            className={classes.checkoutButton}
            component={Link}
            to="/checkout"
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {cart.length == 0 ? renderEmptyCart() : renderCart()}
    </Container>
  );
};
export default Cart;
