import { Card, CardContent, CardMedia, Typography, makeStyles, CardActions, IconButton } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  action: {
    display: "flex",
    justifyContent: "flex-end",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const Product = ({ product }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <div className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${product.price}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing className={classes.action}>
          <IconButton aria-label="Add to Cart">
              <AddShoppingCart />
          </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;