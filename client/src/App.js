import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Appnavbar from './Appnavbar'
import Shoppinglist from './Shoppinglist'
import {Provider} from 'react-redux';
import store from './vf'
import Itemmodal from './Itemmodal'
import {Container} from 'reactstrap'
class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
      <div className="App">
        <Container>
      <Appnavbar/>
      <Itemmodal/>
      <Shoppinglist/>
      </Container> 
      </div>
      </Provider>
    );
  }
 
}

export default App;
