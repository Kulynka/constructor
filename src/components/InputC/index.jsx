import React from 'react';

export const InputC = ({  }) => {

    // const onChange = (e) => {
    //     onChangeValue(e.target.value);
    // }

        let inputData = inputData;
        return (
            <div>
            <select name="cars" id="cars" onChange={this.onChange}>
                <option value="text">Text</option>
                <option value="password">Password</option>
                <option value="checkbox">Checkbox</option>
                <option value="radio">Radio</option>
                <option value="range">Range</option>
            </select>
            <input type={inputData}/>
            </div>    
        )
}