import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Recipe extends Component {
  constructor() {
    super();
    this.flag = false;
  }

  render() {
    return (
      <div className="container">
        <div className="collection">
          <li className="collection-item">
            <b>Total: {this.props.total} $</b>
          </li>
        </div>
        <div className="form">
          {this.props.total === 0 ? (
            ""
          ) : (
            <Link to="/order" style={{ textDecoration: "none" }}>
              <button>Checkout</button>
            </Link>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
    total: state.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addShipping: () => {
      dispatch({ type: "ADD_SHIPPING" });
    },
    substractShipping: () => {
      dispatch({ type: "SUB_SHIPPING" });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe);
