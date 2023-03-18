import React from "react";


class Search extends React.Component {
  state = {
    search: '',
    type: 'all'
  }

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchForCaption(this.state.search, this.state.type);
    }
  }

  handleFilter = (event) => {
    this.setState(() => ({type: event.target.dataset.type}),
                  () => this.props.searchForCaption(this.state.search, this.state.type));
  }

  render() {
      return <div className='search'>
      <div className="search__div">
        <input 
          type="search" 
          className='search__bar' 
          placeholder="Искать здесь..." 
          onChange={(e) => this.setState({search: e.target.value})}
          onKeyDown={this.handleKey}
        />
        <button className='search__btn' onClick={() => 
                      this.props.searchForCaption(this.state.search, this.state.type)}>
          <img src="./icons8-search(darkblue).svg" alt="Иконка" className="search__icon" />
        </button>
      </div>
      <div className="search__radio">
        <label>
          <input 
            type="radio" 
            name="type" 
            className="search__radio-btn" 
            data-type="all"
            onChange={this.handleFilter}
            checked={this.state.type === 'all'}
          />
          <span className="search__radio-label">All</span>
        </label>
        <label>
          <input 
            type="radio" 
            name="type" 
            className="search__radio-btn" 
            data-type="movie"
            onChange={this.handleFilter}
            checked={this.state.type === 'movie'}
          />
          <span className="search__radio-label">Only films</span>
        </label>
        <label>
            <input 
              type="radio" 
              name="type" 
              className="search__radio-btn" 
              data-type="series"
              onChange={this.handleFilter}
              checked={this.state.type === 'series'}
            />
            <span className="search__radio-label">Only series</span>
        </label>
      </div>
    </div>
    }
}

export {Search};