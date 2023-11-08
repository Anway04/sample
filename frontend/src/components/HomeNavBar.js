import React from 'react';

function HomeNavBar() {
  return (
    <div className="navbar">
      <a href="/">Home</a>
      <div className="dropdown">
        <button className="dropbtn">Content
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="/submit">Submit Content</a>
          <a href="/editor">Editor Dashboard</a>
        </div>
      </div>
      {/* Add more navigation links as needed */}
    </div>
  );
}

export default HomeNavBar;