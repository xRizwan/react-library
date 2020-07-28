// main Imports
import React from 'react';
import ReactDOM from 'react-dom';

// component and styles imoports
import { allBooks } from './booksData';
import Header from "./components/tableHeader"
import MainHeading from './components/MainHeading'
import DisplayBook from "./components/DisplayBooks"
import AddForm from "./components/AddForm";
import Add from './components/addBtn';
import './index.css';

// main component (not called "APP" just for practice)
class ShowAll extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            book: props.allBooks,
            display: false,
        }

        // binding "this" to each function
        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.changeBooks = this.changeBooks.bind(this);
    }
    componentWillUnmount(){
        localStorage.setItem("books", JSON.stringify(allBooks))
    }

    // toggle the read status on click
    handleClick = (event) => {
        let key = event.target.dataset.key;
        allBooks[key].read = !allBooks[key].read;
        this.setState({
            book: allBooks
        })

        // saving in local storage
        localStorage.setItem("books", JSON.stringify(allBooks))
    }

    // delete the book from the array on click
    handleDelete = (event) => {
        let key = parseInt(event.target.dataset.key);
        allBooks.splice(key, 1)
        this.setState({
            book: allBooks
        })

        // saving in local storage
        localStorage.setItem("books", JSON.stringify(allBooks))
    }

    // change state with books array
    changeBooks(BookData){
        this.setState({
            book: BookData
        })

        // saving in local storage
        localStorage.setItem("books", JSON.stringify(allBooks))
    }

    // change the state on click event
    changeDisplay = (event) => {
      this.setState({
          display: !this.state.display
      })
    }
    
    render(){
        return(
            <React.Fragment>
                {/* Heading Bar*/}
                <MainHeading />

                {/* All Books in tabular form*/}
                <div className="books-table">
                    <table className="tab-data">
                    <thead>
                        {/* Heading for Table*/}
                        <Header />
                    </thead>
                    <tbody>
                        {/* 
                            Mapping over the books array 
                            displaying each item in the array
                            as an individual table row
                        */}
                        {this.state.book.map(current  => {
                            return (
                                <DisplayBook 
                                    book={current}
                                    key={allBooks.indexOf(current)}
                                    num={allBooks.indexOf(current)}
                                    handleClick={this.handleClick}
                                    handleDelete={this.handleDelete}
                                />
                            )
                        })}
                    </tbody>
                    </table>
                </div>
                
                {/* Adding Forms and the AddButton */}
                <Add changeDisplay={this.changeDisplay.bind(this)}/>
                <AddForm 
                    display={this.state.display}
                    change={this.changeDisplay}
                    changeBooks={this.changeBooks}
                />
          </React.Fragment>
        )
    }
}

// rendering to the DOM
ReactDOM.render(
    <ShowAll allBooks={allBooks}/>
    ,
    document.getElementById('root')
  );