import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Product from './Product/product';

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));

const Products =  ({products, addToCart}) => {
  const classes = useStyles();
   
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} addToCart={() =>{addToCart(product)}}/>
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;