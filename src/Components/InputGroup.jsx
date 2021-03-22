import React from 'react'

export const InputGroup = ({ labelTex, value, OnChange, colSize, isInvalid, InnputType, name }) => {
    return (
    <div className={`col-md-${colSize} mb-3`}>
        <label>{ labelTex }</label>
        <input type={ InnputType } 
               name={ name }
               className={`form-control ${ (!isInvalid) ? '' : 'is-invalid' } `} 
               value={ value } onChange={ OnChange } />
      </div>
    )
}
