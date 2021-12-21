import React from 'react'

function Logo({airlineCode}) {
    const URL = `https://pics.avs.io/85/100/${airlineCode}.png`;
    return (
        <img
            src={URL}
            alt={airlineCode}
        />
    )
}

export default Logo
