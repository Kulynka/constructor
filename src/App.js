import React from 'react';
import './App.css';
// Conteiners
import {Select} from './containers/Select';
import {Preview} from './containers/Preview';

const listnames = ['text', 'password', "checkbox", "radio", "range"];

function App() {
  const [selectV, setSelectV] = React.useState(listnames[0])
  const [valueInput, setvalueInput] = React.useState('')
  const getSelectV = value => setSelectV(value)
  const getvalueInput = value => setvalueInput(value)
  return (
    <div className="App">
      <div className="block">
        <div>
      <div >
          <Select
           getvalueInput={getvalueInput} 
           getSelectV={getSelectV} 
          listnames={listnames}
           selectV={selectV} 
           valueInput={valueInput} />
        </div>
        <div >
          <Select
           getvalueInput={getvalueInput} 
           getSelectV={getSelectV} 
          listnames={listnames}
           selectV={selectV} 
           valueInput={valueInput} />
        </div>
        <div >
          <Select
           getvalueInput={getvalueInput} 
           getSelectV={getSelectV} 
          listnames={listnames}
           selectV={selectV} 
           valueInput={valueInput} />
        </div>
        <div >
          <Select
           getvalueInput={getvalueInput} 
           getSelectV={getSelectV} 
          listnames={listnames}
           selectV={selectV} 
           valueInput={valueInput} />
        </div>
        </div>
      </div>
      <div className="block">
        <Preview />
      </div>
    </div>
  );
}

export default App;
