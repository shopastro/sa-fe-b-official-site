import React from "react";
import IndexPage from "@pages/Index";
import IndexPage2 from "@pages/Index2";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const App: React.FC = () => {
  //
  // const [productData, setProductData] = useState([{}]);
  // const productDoms = [];
  // for (let i = 0; i < productData.length; i += 1) {
  //     const productItemData = productData[i];
  //     if (!productItemData) {
  //         continue;
  //     }
  // }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/aaa" component={IndexPage2} />
        <Redirect from="/*" to="/" />
      </Switch>
    </Router>
  );
};

export default App;
