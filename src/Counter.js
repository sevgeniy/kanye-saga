import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const DisplayCounter = ({ count, handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}>{count}</button>
    </div>
  );
};

class DisplayCounter2 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextprops", nextProps);
  }

  render() {
    const { handleClick, count } = this.props;

    return (
      <div>
        <button onClick={handleClick}>{count}</button>
      </div>
    );
  }
}

export default () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  console.log(count);

  const handleClick = (e) => {
    dispatch({ type: "INCREMENT" });
  };

  return (
    <div>
      <DisplayCounter2 count={count} handleClick={handleClick} />
    </div>
  );
};
