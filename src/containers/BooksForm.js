import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

class BooksForm extends React.Component {
  BOOKSCATEGORY = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: '',
    };
  }

  handleInputChange = (event) => {
    const { value } = event.target;
    const { name } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { createBook } = this.props;
    const { title, category } = this.state;
    createBook({
      id: Math.floor(Math.random() * 100),
      title,
      category,
    });
    this.setState({ title: '', category: '' });
  };

  render() {
    const { title, category } = this.state;

    return (
      <div className="add-new-book">
        <hr className="line" />
        <div className="add-form-title">ADD NEW BOOK</div>
        <div className="form-container">
          <form onSubmit={this.handleSubmit} className="ff">
            <div className="input-width">
              <input
                className="form-input"
                name="title"
                type="text"
                value={title}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="select-width">
              <select name="category" className="form-select" value={category} onChange={this.handleInputChange}>
                {this.BOOKSCATEGORY.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div className="add-book-form">
              <button type="submit">Add Book</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => { dispatch(createBook(book)); },
});

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
