import React, { Component } from "react";
import Book from "./Book";

class AuthorDetail extends Component {
  render() {
    const author = this.props.author;
    const authorName = `${author.first_name} ${author.last_name}`;
    const books = this.props.author.books.map(book => (
      <Book key={book.title + book.color} book={book} author={authorName} />
    ));

    return (
      <div className="author col-xs-10">
        <div>
          <h3>authorName</h3>
          <img src={author.imageUrl} className="img-thumbnail" />
        </div>
        <table className="mt-3 table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Authors</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>{books}</tbody>
        </table>
      </div>
    );
  }
}

export default AuthorDetail;
