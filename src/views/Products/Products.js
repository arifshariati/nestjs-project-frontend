import React, { Fragment, useEffect } from "react";
import axios from "axios";

//Comppnents
import { AddProduct, ProductCard } from "./components";

//Redux
import { useSelector, useDispatch } from "react-redux";
import {
  setProductDetails,
  getProductDetails,
} from "../../features/productsSlice";

//Mui
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

// Mock Image data for random image picker
import { data } from "../../data-image";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 0),
    display: "flex",
    flexDirection: "column",
  },
  topPadding: {
    padding: theme.spacing(4, 0),
  },
  sidePadding: {
    padding: theme.spacing(1, 1),
  },
}));

const Products = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const products = useSelector(getProductDetails);

  useEffect(() => {
    axios
      .get("http://localhost:3000")
      .then((res) => {
        // insert Pictures into data here

        res.data.map((product) => {
          return (product.picture =
            data[Math.floor(Math.random() * data.length)]);
        });
        dispatch(setProductDetails(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xl={8} lg={8} xs={12} sm={12}>
          <Grid container justify="flex-end" className={classes.sidePadding}>
            <AddProduct />
          </Grid>
          <Grid container className={classes.topPadding} justify="center">
            {products && products !== null ? (
              products.map((product, id) => (
                <Grid
                  item
                  xl={3}
                  lg={3}
                  md={3}
                  xs={6}
                  sm={6}
                  className={classes.sidePadding}
                  key={id}
                >
                  <ProductCard product={product} />
                </Grid>
              ))
            ) : (
              <Fragment>
                <img src="/NoData.png" alt="data not found" />
                <h1>Sorry Dude There is No Data for Now</h1>
              </Fragment>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Products;
