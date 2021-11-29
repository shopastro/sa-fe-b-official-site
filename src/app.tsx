import React from "react";
import IndexPage from "@pages/Index";
import Policy from "@pages/Policy";
import Header from "@components/common/Header";
import Footer from "@components/common/Footer";
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
      <Header />
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/policy/zh-CN" component={Policy} />
        <Route path="/agreement/zh-CN" component={Policy} />
        <Route exact path="/policy" component={Policy} />
        <Route exact path="/agreement" component={Policy} />
        <Redirect from="/*" to="/" />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
