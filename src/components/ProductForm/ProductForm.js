import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import axios from "axios";

// Component
import AddButton from "../AddButton";

// validator
import { validatePostData } from "./validator";

// MUI
import TextField from "@material-ui/core/TextField";
import { MenuItem } from "@material-ui/core";

// ISO 4217 Currency Codes
const currency_code = require("currency-codes");

const genderList = [
  {
    value: "male",
    label: "Male",
  },
  {
    value: "female",
    label: "Female",
  },
  {
    value: "unisex",
    label: "Unisex",
  },
];

const conditionList = [
  {
    value: "new",
    label: "New",
  },
  {
    value: "used",
    label: "Used",
  },
];
class ProductForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      link: "",
      price: "",
      currency: currency_code.code("TRY"),
      quantity: "",
      brand: "",
      color: "",
      gender: genderList[0].value,
      gtin: "",
      mpn: "",
      condition: conditionList[0].value,
      errors: {},
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const productData = {
      title: this.state.title,
      description: this.state.description,
      link: this.state.link,
      price: this.state.price,
      currency: this.state.currency,
      quantity: this.state.quantity,
      brand: this.state.brand,
      color: this.state.color,
      gender: this.state.gender,
      gtin: this.state.gtin,
      mpn: this.state.mpn,
      condition: this.state.condition,
    };

    const { valid, errors } = validatePostData(productData);

    if (!valid) {
      this.setState({
        ...this.state,
        errors,
      });
    } else {
      axios
        .post("http://localhost:3000", productData)
        .then(() => {
          return (window.location.pathname = "/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  render() {
    const errors = this.state.errors;
    console.log(errors);
    return (
      <Fragment>
        <TextField
          autoFocus
          required
          inputProps={{ minLength: 5 }}
          margin="dense"
          type="text"
          fullWidth
          id="title"
          name="title"
          label="Product Title"
          onChange={this.handleChange}
          value={this.state.title}
          helperText={errors.title}
          error={errors.title ? true : false}
        />
        <TextField
          autoFocus
          required
          margin="dense"
          type="text"
          fullWidth
          id="description"
          name="description"
          label="Product Description"
          multiline
          rows={5}
          onChange={this.handleChange}
          value={this.state.description}
          helperText={errors.description}
          error={errors.description ? true : false}
        />
        <TextField
          autoFocus
          required
          margin="dense"
          type="text"
          fullWidth
          id="link"
          name="link"
          label="Link"
          onChange={this.handleChange}
          value={this.state.link}
          helperText={errors.link}
          error={errors.link ? true : false}
        />
        <TextField
          autoFocus
          required
          margin="dense"
          type="text"
          fullWidth
          id="price"
          name="price"
          label="Price"
          onChange={this.handleChange}
          value={this.state.price}
          helperText={errors.price}
          error={errors.price ? true : false}
        />
        <TextField
          autoFocus
          select
          required
          margin="dense"
          type="text"
          fullWidth
          id="currency"
          name="currency"
          label={"Currency"}
          onChange={this.handleChange}
          value={this.state.currency}
          helperText={errors.currency}
          error={errors.currency ? true : false}
        >
          {currency_code.codes().map((cc) => (
            <MenuItem key={cc} value={cc}>
              {cc}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          autoFocus
          required
          margin="dense"
          type="number"
          fullWidth
          id="quantity"
          name="quantity"
          label="Quantity"
          onChange={this.handleChange}
          value={this.state.quantity}
          helperText={errors.quantity}
          error={errors.quantity ? true : false}
        />
        <TextField
          autoFocus
          required
          margin="dense"
          type="text"
          fullWidth
          id="brand"
          name="brand"
          label="Brand"
          onChange={this.handleChange}
          value={this.state.brand}
          helperText={errors.brand}
          error={errors.brand ? true : false}
        />
        <TextField
          autoFocus
          required
          margin="dense"
          type="text"
          fullWidth
          id="color"
          name="color"
          label="Color"
          onChange={this.handleChange}
          value={this.state.color}
          helperText={errors.color}
          error={errors.color ? true : false}
        />
        <TextField
          autoFocus
          select
          margin="dense"
          type="text"
          fullWidth
          id="gender"
          name="gender"
          label="Gender"
          onChange={this.handleChange}
          value={this.state.gender}
          helperText={errors.gender}
          error={errors.gender ? true : false}
        >
          {genderList.map((gender) => (
            <MenuItem key={gender.value} value={gender.value}>
              {gender.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          autoFocus
          margin="dense"
          type="text"
          fullWidth
          id="gtin"
          name="gtin"
          label="GTIN"
          onChange={this.handleChange}
        />
        <TextField
          autoFocus
          margin="dense"
          type="text"
          fullWidth
          id="mpn"
          name="mpn"
          label="MPN"
          onChange={this.handleChange}
        />
        <TextField
          autoFocus
          required
          select
          margin="dense"
          type="text"
          fullWidth
          id="condition"
          name="condition"
          label="Condition"
          onChange={this.handleChange}
          value={this.state.condition}
          helperText={errors.condition}
          error={errors.condition ? true : false}
        >
          {conditionList.map((condition) => (
            <MenuItem key={condition.value} value={condition.value}>
              {condition.label}
            </MenuItem>
          ))}
        </TextField>
        <Link to="/">
          <AddButton
            text="Add Product"
            color="primary"
            onClick={this.handleSubmit}
          />
        </Link>
      </Fragment>
    );
  }
}
ProductForm.propTypes = {
  classes: propTypes.object,
};

export default ProductForm;
