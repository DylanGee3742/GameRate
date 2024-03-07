import React from 'react'

export function Footer() {
    return (
        <div className='row d-flex p-5 mt-5 justify-content-center' style={{ borderTop: "2px solid black" }}>
                <div className='col d-flex justify-content-end'>
                    <a href='#'>About Us</a>
                </div>
                <div className='col d-flex'>
                    <a href='#'>Terms</a>
                </div>
                <div className='col d-flex'>
                    <a href='#'>Contact</a>
                </div>
                <div className='col d-flex'>
                    <a href='#'>Instragram</a>
                </div>
                <div className='col d-flex'>
                    <a href='#'>X</a>
                </div>
            </div>
    )
}
