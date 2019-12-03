import * as React from 'react';
import { Button } from '@material-ui/core';

import { cube } from './utils';

const Home = React.lazy(() => import(/* webpackChunkName: "home" */ './components/home'));
const Welcome = React.lazy(() => import(/* webpackChunkName: "welcome" */ './components/welcome'));

class App extends React.PureComponent<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isHome: true,
    };
  }

  render() {
    return (
      <div>
        App {cube(2)}
        <br />
        <Button
          variant="contained"
          color="primary"
          children="click"
          onClick={() => this.setState({ isHome: !this.state.isHome })}
        />
        <br />
        <React.Suspense fallback={<div>Loading...</div>}>
          {this.state.isHome ? <Home /> : <Welcome />}
        </React.Suspense>
      </div>
    );
  }
}

export default App;
