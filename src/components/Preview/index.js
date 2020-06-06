import React from "react";
import '../../App.css';

export const Preview = ({ listComponents }) => {
    return(
        <div>
            {listComponents.map((e,i) => {
                if ( e.value !== "" && e.type !== "" && e.type !== "radio" && e.type !== "checkbox" ) {
                    return (
                        <div key={i}>
                            <div className='Label'>{e.value}</div>
                            <input className='Input' type={e.type} defaultValue='' onChange={e => console.log(e.target.value)} />
                        </div>
                    )
                }
                if ( e.value !== "" && e.type !== "" && (e.type === "radio" || e.type === "checkbox") ) {
                    return (
                        <div key={i}>
                            <div className='Label'>{e.value}</div>
                            {e.options.map((el, ind) => {
                                return <input key={ind} type={e.type} name='name' defaultValue='' />
                            })}
                        </div>
                    )
                }
            })}
        </div>
    )
}