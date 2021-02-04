import { Typography, Button, Card, CardActions, CardContent, CardMedia,} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cartActions: {
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
}));

const CartItem = ({cart, removeCartItem, updateCartItems}) => {
  const classes = useStyles();
  return (
    <Card className="cart-item">
      <CardMedia
        image={cart.image}
        alt={cart.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{cart.name}</Typography>
        <Typography variant="h5">
          {cart.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            disabled={cart.quantity === 1}
            onClick={() => updateCartItems(cart.id, cart, cart.quantity - 1)}
          >
            -
          </Button>
          <Typography>&nbsp;{cart.quantity}&nbsp;</Typography>
          <Button
            type="button"
            size="small"
            onClick={() => updateCartItems(cart.id, cart, cart.quantity + 1)}
          >
            +
          </Button>
        </div>
        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={() => removeCartItem(cart)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
