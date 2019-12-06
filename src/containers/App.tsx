import * as React from 'react';
import AppContent from '../components/AppContent';
import Header from '../components/Header';
import logo from '../Research-logo.jpg';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header pageTitle="Welcome to Media Smart Risk Research" logoSrc={logo} />
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <AppContent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
