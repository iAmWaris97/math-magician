import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="calculator">
          <div className="display">
            <span> </span>
          </div>
          <div className="keypad">
            <div className="input-keys">
              <div className="functions">
                <button type="button" className="clear-key">
                  AC
                </button>
                <button type="button" className="change-sign">
                  +/-
                </button>
                <button type="button" className="percentage">
                  %
                </button>
              </div>
              <div className="numbers">
                <button
                  type="button"
                  className="zero"
                  value={0}
                >
                  0
                </button>
                <button
                  type="button"
                  className="dot"
                  value="."
                >
                  .
                </button>
                <button
                  type="button"
                  className="one"
                  value={1}
                >
                  1
                </button>
                <button
                  type="button"
                  className="two"
                  value={2}
                >
                  2
                </button>
                <button
                  type="button"
                  className="three"
                  value={3}
                >
                  3
                </button>
                <button
                  type="button"
                  className="four"
                  value={4}
                >
                  4
                </button>
                <button
                  type="button"
                  className="five"
                  value={5}
                >
                  5
                </button>
                <button
                  type="button"
                  className="six"
                  value={6}
                >
                  6
                </button>
                <button
                  type="button"
                  className="seven"
                  value={7}
                >
                  7
                </button>
                <button
                  type="button"
                  className="eight"
                  value={8}
                >
                  8
                </button>
                <button
                  type="button"
                  className="nine"
                  value={9}
                >
                  9
                </button>
              </div>
            </div>
            <div className="operators">
              <button
                type="button"
                className="devision"
              >
                /
              </button>
              <button
                type="button"
                className="multiplication"
              >
                *
              </button>
              <button
                type="button"
                className="subtraction"
              >
                -
              </button>
              <button
                type="button"
                className="addition"
              >
                +
              </button>
              <button type="button" className="equals">
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
