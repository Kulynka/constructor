import React from 'react';
// Components
import {InputC} from '../../components/InputC';

export const Select = ({ listnames, getSelectV, selectV, getvalueInput, valueInput}) => {
  
    const onChangeSelect = e => getSelectV(e.target.value)
    const onChangeInput = e => getvalueInput(e.target.value)
    console.log(selectV)
  

        return (
            <div>
             
                <select name="cars" id="cars" onChange={onChangeSelect}>
                {listnames.map((e, i) => {
                    return (
                        <option key={i} value={e}>{e}</option>
                    )
                })}
                 </select>
                 <input type="text"  defaultValue={valueInput} onChange={onChangeInput}></input>
               
            </div>
        )
}