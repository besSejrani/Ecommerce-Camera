import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

/**
|--------------------------------------------------
| EXPLANATION :
|
| This is just an HOC (higher order component) that
| wraps an other component. Depending on a certain 
| state it's get loaded or not.
|
| It's just a function that invoks another function.
|--------------------------------------------------
*/
const withSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default withSpinner;
