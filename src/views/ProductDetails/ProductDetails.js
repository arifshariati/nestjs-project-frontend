import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

// Components
import { FeatureButton, BackButton, DeleteButton } from "../../components";

//Mui
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

// Icons from react-icons
import { GiSwordBrandish } from "react-icons/gi";
import { HiColorSwatch } from "react-icons/hi";
import { FaTransgenderAlt } from "react-icons/fa";
import { SiAnaconda } from "react-icons/si";

// Image data for Random Image Picker
import { data } from "../../data-image";

const PictureContainer = styled.div`
  max-width: 100%;
`;

const ProductPicture = styled.img.attrs((props) => ({ src: props.Image }))`
  width: 100%;
  alt: "Product Picture";
  border-radius: 1rem;
`;
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  topPadding: {
    padding: theme.spacing(4, 0),
  },
  sidePadding: {
    padding: theme.spacing(1, 1),
  },
  productDetails: {
    padding: theme.spacing(2, 2),
    margin: theme.spacing(0, 2),
    display: "flex",
    flexDirection: "column",
  },
  productFeatures: {
    padding: theme.spacing(10, 2),
    display: "flex",
    backgroundColor: theme.palette.tonalOffset,
    margin: theme.spacing(0, 2),
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const ProductDetails = (props) => {
  const [product, setProduct] = useState({});

  const classes = useStyles();
  let productId = props.match.params.id;
  console.log(productId);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/${props.match.params.id}`)
      .then((res) => {
        console.log(res.data);
        // insert Pictures into data here
        res.data.picture = data[Math.floor(Math.random() * data.length)];

        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.match.params.id]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/${product._id}`)
      .then(() => {
        return <Redirect to={{ pathname: "/" }} />;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xl={8} lg={8} xs={12} sm={12}>
          <Grid container justify="flex-end" className={classes.sidePadding}>
            <Link to="/">
              <BackButton text="Go Back" />
            </Link>
          </Grid>
          <Grid container>
            <Grid item xl={4} lg={4} xs={12} sm={12}>
              <PictureContainer>
                <ProductPicture Image={product.picture} />
              </PictureContainer>
            </Grid>
            <Grid item xl={8} lg={8} xs={12} sm={12}>
              <Grid container className={classes.productDetails}>
                <Typography variant="h4" gutterBottom>
                  {product.title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {product.description}
                </Typography>
              </Grid>
              <Grid container className={classes.productFeatures}>
                <Typography variant="h5" gutterBottom>
                  Specifications
                </Typography>
                <FeatureButton text={product.price + " " + product.currency} />
                <FeatureButton
                  text={product.brand}
                  icon={<GiSwordBrandish />}
                />
                <FeatureButton text={product.color} icon={<HiColorSwatch />} />
                <FeatureButton
                  text={product.gender}
                  icon={<FaTransgenderAlt />}
                />
                <FeatureButton text={product.condition} icon={<SiAnaconda />} />
              </Grid>

              <Grid container className={classes.productDetails}>
                <Link to="/">
                  <DeleteButton
                    color="primary"
                    text="DELETE"
                    onClick={handleDelete}
                  />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetails;
