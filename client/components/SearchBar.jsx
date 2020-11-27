import React from 'react'

// add to index.html
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


class SearchBar extends React.Component {


  render() {
    return (
      <>
          <h1>SearchBar</h1>
        <div className="search-box-div">
          <form className="search-box" action="./">
            <input className='search' type="text" placeholder="Search.." name="search" />

            <button type="submit"><i className="fa fa-search"></i></button>
          </form>
        </div>

      </>
    )
  }
}



export default SearchBar
