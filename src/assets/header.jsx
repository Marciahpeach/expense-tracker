import React from 'react';
function Header (){
    return(
        <>
    <div className='header'>
        <h1>Expense Tracker</h1>
        <p>This app helps you track your expenses and helps you to manage your money.</p>
        {/* <input
            type="text"
            placeholder="Search by name or description..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-bar"
          /> */}
        </div>
    </>
    )
}
export default Header