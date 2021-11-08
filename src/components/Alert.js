import React from 'react'

function Alert(props) {

    const capitalize = (word) => {
        let newText = word.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
        return newText;
    }

    return (
        <div style={{height:'60px'}}>
            {
                props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong> {capitalize(props.alert.type)} </strong> : {props.alert.msg}
                </div>
            }
        </div>
    )
}

export default Alert
