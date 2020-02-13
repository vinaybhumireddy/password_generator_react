import React from 'react'

import GeneratePasswordButton from './GeneratePasswordButton'
import CopyToClipboardButton from './CopyToClipboardButton'

const ButtonsMenu = (props) => {
    return (
        <>
            <GeneratePasswordButton 
            props = {props}
            />
            <CopyToClipboardButton 
            props = {props}
            />
            
        </>
    )
}

export default ButtonsMenu