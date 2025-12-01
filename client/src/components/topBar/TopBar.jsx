import React from 'react'

const TopBar = () => {
    return (
        <div className='topBar'>
            <div className='search'>
                <img src='/general/search.svg' alt='search'/>
            <input type='text' placeholder='Search'/>
            </div>

        </div>
    )
}
export default TopBar
