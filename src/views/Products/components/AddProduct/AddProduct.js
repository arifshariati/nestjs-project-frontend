import React, { Component, Fragment } from "react";
import propTypes from "prop-types";

// Components
import { ProductForm, AddButton, CloseButton } from "../../../../components";

//MUI
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
} from "@material-ui/core";

class AddProduct extends Component {
  state = {
    open: false,
  };

  componentDidMount() {
    if (this.props.openDialog) {
      this.handleOpen();
    }
  }

  render() {
    const dialogMarkup = <ProductForm state={this.state} />;
    return (
      <Fragment>
        <AddButton
          text="Add Product"
          color="primary"
          onClick={() => this.setState({ open: true })}
        />

        <Dialog
          open={this.state.open}
          onClose={() => this.setState({ open: false })}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add New Product</DialogTitle>

          <DialogContent>{dialogMarkup}</DialogContent>
          <DialogActions>
            <CloseButton
              text="Close"
              onClick={() => this.setState({ open: false })}
            />
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

AddProduct.propTypes = {
  openDialog: propTypes.bool,
};
export default AddProduct;
