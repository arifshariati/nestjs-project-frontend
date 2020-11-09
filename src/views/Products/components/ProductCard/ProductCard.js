import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Components
import { FeatureButton, AddButton } from "../../../../components";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

// Icons from react-icons
import { GiSwordBrandish } from "react-icons/gi";
import { HiColorSwatch } from "react-icons/hi";
import { FaTransgenderAlt } from "react-icons/fa";
import { SiAnaconda } from "react-icons/si";

import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  CardActions,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 240,
  },
  customButton: {
    borderRadius: "30px",
    fontSize: "small",
  },
});

// custom style for tage
const Tags = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0rem;
  justify-content: space-around;
  align-items: center;
  font-size: x-small;
`;
const ProductCard = ({ product }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.picture}
          title={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.title}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <Tags>
        <FeatureButton text={product.price + ` ` + product.currency} />
        <FeatureButton text={product.brand} icon={<GiSwordBrandish />} />
        <FeatureButton text={product.color} icon={<HiColorSwatch />} />
        <FeatureButton text={product.gender} icon={<FaTransgenderAlt />} />
        <FeatureButton text={product.condition} icon={<SiAnaconda />} />
      </Tags>

      <CardActions>
        <Grid container justify="center">
          <Link to={`/details/${product._id}`}>
            <AddButton text="Show Details" color="primary" />
          </Link>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
