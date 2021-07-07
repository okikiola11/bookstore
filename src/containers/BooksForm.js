import React from 'react';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Action',
    };

    const BOOKSCATEGORY = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

    this.handleChange = this.handleChange.bind(this);
    this.handleSelectOption = this.handleSelectOption.bind(this);
  }

  handleInputChange = (event) => {
    console.log('Option Selected!!');
    const { value } = event.target;
    const { name } = event.target.name;

    this.setState({ 
      [name]: value
     });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit Selected!!');
    this.setState({ title: e.target.value });
  };

  render() {
    const { title, category } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
          name="textInput"
          type="text" 
          value={title}
          onChange={this.handleInputChange}
          />
        </div>
        <div>
          <select name="selectbox" value={category} onChange={this.handleInputChange}>
            {BOOKSCATEGORY.map((option) => (
              <option key={option.id} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default BooksForm;
