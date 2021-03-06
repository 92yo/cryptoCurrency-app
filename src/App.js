import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import "./app.css";
import {
  Navbar,
  CryptoExchanges,
  HomePage,
  CryptoCurrencies,
  CryptoDetails,
  CryptoNews,
} from "./components";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/exchanges" component={CryptoExchanges} />
              <Route path="/cryptocurrencies" component={CryptoCurrencies} />
              <Route path="/crypto/:coinId" component={CryptoDetails} />
              <Route path="/news" component={CryptoNews} />
            </Switch>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Crypto <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
