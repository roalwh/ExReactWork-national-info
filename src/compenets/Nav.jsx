import React from 'react'


export default function Nav(props) {

    const ondarkmode = props.ondarkmode;

    return (
        <>
        <div className='navBox'>
            <span>Where in the world?</span>
            <button className='btn' onClick={ondarkmode}> Dark Mode</button>
        </div>
        <hr />
        </>
    )
}
