import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon'

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
    this.state = { search: '' }
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value })
  }

  handleClick() {
    const { handleSearch } = this.props
    const { search } = this.state
    handleSearch(search);
  }

  render() {
    const { search } = this.state
    return (
      <div className='search-container' >
        <input 
          className='search-input'
          type='text' 
          onChange={ this.handleChange }
          value={ search }
        />
        <div className='search-btn' onClick={ this.handleClick }>
          {/* <i className='material-icons search-icon'>search</i> */}
          <Icon>search</Icon>
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
}

export default Search;
