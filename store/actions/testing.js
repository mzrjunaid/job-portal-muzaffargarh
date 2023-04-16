export const TESTING = "TESTING";

export const testingFunction = (testing) => {
  return async (dispatch) => {
    console.log(testing);

    dispatch({ type: TESTING, data: testing });
  };
};
