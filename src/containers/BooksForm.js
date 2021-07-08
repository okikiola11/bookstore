import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CREATE_BOOK } from '../actions/index';

class BooksForm extends React.Component {
  BOOKSCATEGORY = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSelectOption = this.handleSelectOption.bind(this);
  }

  handleInputChange = (event) => {
    const { value } = event.target;
    const { name } = event.target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { CREATE_BOOK } = this.props;
    const { title, category } = this.state;
    CREATE_BOOK({
      id: Math.floor(Math.random() * 100),
      title,
      category,
    });
    this.setState({ title: '', category: '' });
  };

  render() {
    const { title, category } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          Title
          <input
            name="title"
            type="text"
            value={title}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          Category
          <select name="category" value={category} onChange={this.handleInputChange}>
            {this.BOOKSCATEGORY.map((option) => (
              <option key={option.id} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  CREATE_BOOK: (book) => { dispatch(CREATE_BOOK(book)); },
});

BooksForm.propTypes = {
  CREATE_BOOK: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
