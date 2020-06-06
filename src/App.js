import React from 'react';
import './App.css';
// Components
import { Config } from './components/Config'
import { Preview } from './components/Preview'

function App() {
  const [listComponents, setListComponents] = React.useState([{type: '', value: '', options: [0], id: new Date().getTime(), default: 'default' }]);
  //Callback for update listComponents (useState);
  const getListComponents = value => setListComponents(value)
    return (
    <div className="App">
        <div className='Block'>
            <h3>Components Config</h3>
            <Config listComponents={listComponents} getListComponents={getListComponents} />
        </div>
        <div className='Block'>
            <h3>Components Preview</h3>
            <Preview listComponents={listComponents} />
        </div>
    </div>
  );
}

export default App;
