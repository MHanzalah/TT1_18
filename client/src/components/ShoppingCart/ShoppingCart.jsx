import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import DeleteIcon from '@material-ui/icons/Delete'

import Product from './Products'


import useStyles from './styles';

const ShoppingCart = ({ products }) => {
  const classes = useStyles();

  // add number of item - to be done
  const addToCart = () => {
    // Increase quantity of number in card 
    // Recalculate Price
  }

  // reduce number of item - to be done
  const removeFromCart = () => {
    // Reduce quantity of number in card 
    // Recalculate Price
  }

  // remove item from cart - to be done
  const deleteFromCart = () => {
    // Totally remove item from card
  }  

  return (
    <Card className={classes.root}>
    <Card className={classes.productCard} variant="outlined">
      <CardContent> 

        <Typography variant="h7" component="h2">
          Mens Casual Premium Slim Fit T-Shirts 
        </Typography>

        <CardMedia className={classes.Media} component="img" image="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt=""/>

        <Typography color="textSecondary">
          Price: $22.30
        </Typography>

        <Typography color="textSecondary">Quantity: 1</Typography>

        <Typography color="textSecondary">
          Total: $22.30
        </Typography>

      </CardContent>
      <CardActions>
        <ButtonGroup className={classes.BtnGrp}
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          <Button
            size="small"
            color="inherit"
            aria-label="cart"
            //onClick={() => addToCart()}
          >
            <AddIcon />
          </Button>
          <Button
            size="small"
            color="inherit"
            aria-label="cart"
            //onClick={() => removeFromCart()}
          >
            <RemoveIcon />
          </Button>
          <Button
            size="small"
            color="inherit"
            aria-label="cart"
            //onClick={() => deleteFromCart()}
          >
            <DeleteIcon />
          </Button>
        </ButtonGroup>
      </CardActions>

    </Card>

    <Card className={classes.totalprice}>
      <Typography color="textSecondary"> Total: $22.30 </Typography>      
      <Button variant="contained" color="primary" disabled>Checkout</Button>
    </Card>

  </Card>
  )
};

export default ShoppingCart;
