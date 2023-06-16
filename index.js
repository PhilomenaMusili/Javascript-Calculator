function App() {
    const [expression, setExpression] = React.useState("");
    const [answer, setAnswer] = React.useState(0);
  
    const display = (symbol) => {
      setExpression((prev) => prev + symbol);
      if (expression[expression.length - 1] === "=") {
        if (/[0-9]/.test(symbol)) {
          setExpression(symbol);
        } else {
          setExpression(answer + symbol);
        }
      }
    };
  
    const calculate = () => {
      setAnswer(eval(expression));
      setExpression((prev) => prev + "=");
    };
  
    const allClear = () => {
      setExpression("");
      setAnswer(0);
    };
  
    const clear = () => {
      setExpression((prev) => prev.split("").slice(0, prev.length - 1).join(""));
      setAnswer(0);
    };
  
    return (
      <div>
        <div className="container">
        <div className="grid">
          <div className="dis">
            <input type="text" value={expression} placeholder="0" disabled />
            <div className="total">{answer}</div>
          </div>
          <div onClick={allClear} className="padButton AC tomato">
            AC
          </div>
  
          <div onClick={clear} className="padButton C tomato">
            C
          </div>
  
          <div onClick={() => display("/")} className="padButton div">
            /
          </div>
  
          <div onClick={() => display("*")} className="padButton times">
            x
          </div>
  
          <div onClick={() => display("7")} className="padButton seven dark-gray">
            7
          </div>
  
          <div onClick={() => display("8")} className="padButton eight dark-gray">
            8
          </div>
  
          <div onClick={() => display("9")} className="padButton nine dark-gray">
            9
          </div>
  
          <div onClick={() => display("-")} className="padButton minus">
            -
          </div>
  
          <div onClick={() => display("4")} className="padButton four dark-gray">
            4
          </div>
  
          <div onClick={() => display("5")} className="padButton five dark-gray">
            5
          </div>
  
          <div onClick={() => display("6")} className="padButton six dark-gray">
            6
          </div>
  
          <div onClick={() => display("+")} className="padButton plus">
            +
          </div>
  
          <div onClick={() => display("1")} className="padButton one dark-gray">
            1
          </div>
  
          <div onClick={() => display("2")} className="padButton two dark-gray">
            2
          </div>
  
          <div onClick={() => display("3")} className="padButton three dark-gray">
            3
          </div>
  
          <div onClick={calculate} className="padButton equal blue">
            =
          </div>
  
          <div onClick={() => display("0")} className="padButton zero dark-gray">
            0
          </div>
  
          <div onClick={() => display(".")} className="padButton dot dark-gray">
          </div>
        </div>
      </div>
          <h4>By Philomena Kyalo</h4>
            </div>
      
    );
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));
  
