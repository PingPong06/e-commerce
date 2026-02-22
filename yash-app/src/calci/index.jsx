import Add from "./add";
import Multi from "./multi";
import Subs from "./Subs";
import Div from "./Div";
let calculator = () => {
  return (
    <div>
      <h1>Calculator</h1>
      <Add/>
      <Multi/>
      <Subs/>
      <Div/>
    </div>
  );
}

export default calculator;