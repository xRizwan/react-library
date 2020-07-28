import React from 'react';
import { Book, allBooks } from '../booksData';

export default class AddForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: '',
            author: '',
            pages: '',
            read: "not",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // to make inputs controlled
    handleChange(event){
        let {name, value} = event.target;
        this.setState({
            [name] : value,
        })
    }

    // when submit button was pressed
    handleSubmit(event){
        // prevent the default behavior of submit button
        event.preventDefault();
        let title = this.state.title;
        let pages = this.state.pages;
        let author = this.state.author;
        let read = this.state.read === "read";

        let newBook = Book(title, author, pages, read);

        // adding the new book in the books array
        allBooks.push(newBook);

        // changing the parent state
        this.props.changeBooks(allBooks)
        this.props.change();
    }

    render(){
    return(
        <div className="overlay" style={this.props.display ? {display: "block"} : {display: "none"} }>
            <form className="form-field">
                <div
                    className="close"
                    onClick={this.props.change}>
                        X
                </div>
                <div className="header">
                    <div className="heading"> Add to Library</div>
                </div>
                <label>Title:</label>
                <input
                    id="title"
                    type="text"
                    name="title"
                    onChange={this.handleChange}
                    value={this.state.title}
                />
                <br />
                <label>Author:</label>
                <input
                    id="author"
                    type="text"
                    name="author"
                    onChange={this.handleChange}
                    value={this.state.author}
                />
                <br />
                <label>Pages:</label>
                <input
                    id="pages"
                    type="number"
                    name="pages"
                    onChange={this.handleChange}
                    value={this.state.pages}
                />
                <br />
                <label className="status">Read Status</label>
                <br />
                <label>
                    <input
                        type="radio"
                        value="read"
                        checked={this.state.read === "read"}
                        onChange={this.handleChange}
                        name="read"/>Read
                </label>
                <label>
                    <input
                        type="radio"
                        value="not"
                        checked={this.state.read === "not"}
                        onChange={this.handleChange}
                        name="read"/>Not Read
                </label>
                <br />
                <div className="submitBtnContainer">
                    <div
                        type="submit"
                        id="submitBtn"
                        onClick={this.handleSubmit}
                    >Submit</div>
                </div>
            </form>
        </div>
    )
    }
}