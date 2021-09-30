import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import DeleteIcon from '@material-ui/icons/Delete'

import useStyles from './styles';

const ShoppingCart = ({ }) => {
  const classes = useStyles();

  // add number of item - to be done
  const addToCart = () => {

  }

  // reduce number of item - to be done
  const removeFromCart = () => {

  }

  // remove item from cart - to be done
  const deleteFromCart = () => {

  }  

  return (
    <Card className={classes.productCard} variant="outlined">
      <CardContent> 
        <Typography variant="h5" component="h2">
          Men's Bag
        </Typography>
        <Typography color="textSecondary">
          $500
        </Typography>
        <Typography color="textSecondary">Quantity: 1</Typography>
      </CardContent>
      <CardActions>
        <ButtonGroup
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
  )
};

export default ShoppingCart;
