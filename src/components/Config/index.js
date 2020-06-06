import React from "react";
import '../../App.css';
import * as Mo from './model';
export const Config = ({listComponents, getListComponents}) => {
    // Reset Components Config
    const reset = () => getListComponents([])
    // Add new component to Config
    const addComponent = () => getListComponents(listComponents.concat({type: '', value: '', options: [0], id: new Date().getTime(), default: 'default'  }))
    // Removes selected component from config
    const removeComponent = (component) => getListComponents(listComponents.filter(n => n.id !== component.id))
    // Changes the dropdown selection
    const onChangeSelect = (event) => {
        const updateSelect = listComponents.map((el, i) => {
            if (Number(event.target.name) === el.id) {
                el.type = event.target.value
                el.default = event.target.value
                return el
            }
            return el
        })
        getListComponents(updateSelect)
    }
    // Changes the input 
    const onChangeInput = (e) => getListComponents( listComponents.map(el => {
                    if(el.id === Number(e.target.name)){
                        el.value = e.target.value
                        return el
                    }
                    return el;
                }))
    // Adding new option to checkbox or radio buttons
    const addOption = index => {
        const updateOption = listComponents.map((el, i) => {
            if (i === index) {
                el.options.push(index + 1)
                return el
            }
            return el
        })
        getListComponents(updateOption)
    }

    return(
        <div>
            {listComponents.map((e, i) => {
                return(
                    <div key={i}>
                        <div className='Flex'>
                            <select 
                                className='Select'
                                onChange={(el) => onChangeSelect(el, e)}
                                value={e.default}
                                name={e.id}
                            >
                                <option value={'default'} hidden disabled >Type</option>
                                {Mo.selectType.map((el , index)=> <option key={index}>{el}</option>)}
                            </select>
                            <input name={e.id} onChange={(el) => onChangeInput(el, e.id)} value={e.value} className='Input' placeholder='Message'/>
                            <button onClick={() => removeComponent(e)} className="Btn BtnRemove">X</button>
                        </div>
                        {(e.type === 'checkbox' || e.type === 'radio')
                        &&
                        <div>
                            {e.options.map((elem, index) => {
                                return(
                                    <button key={index} className='Option'>Option</button>
                                )
                            })}
                            <button onClick={() => addOption(i)} className="Btn">+</button>
                        </div>}
                    </div>
                )
            })}
            <button onClick={reset} className="Reset">Remove All</button>
            <button onClick={addComponent} className="Button">+ Add components</button>
        </div>
    )
}