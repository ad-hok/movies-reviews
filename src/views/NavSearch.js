import React, { Component } from 'react';

class NavSearch extends Component {
  render() {
    return (
      <div className="navbar-search-form">
        <form>
          <div className="search-group">
            <input
              type="text"
              placeholder="Busca por el nombre de una película"
            />
            <button>Buscar</button>
          </div>
        </form>
      </div>
    );
  }
}

export default NavSearch;
