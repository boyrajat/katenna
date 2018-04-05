import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
// import { DeleteBtn } from "../../components/DeleteBtn";


class DepDetail extends Component {
  state = {
    books: [],
    department: "",
    task: "",
    description: ""
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc

  componentDidMount() {
    this.loadDepBooks();
  }

  loadDepBooks = () => {
    API.getDepBooks(this.props.match.params.department)
      .then(res =>
        this.setState({ books: res.data, department: "", task: "", description: "" })
      )
      .catch(err => console.log(err));
  };

//   componentDidMount() {
//     API.getDepBooks(this.props.match.params.department)
//     .then(res =>
//       this.setState({ book: res.data, department: "", task: "", description: "" })
//     )
//     .catch(err => console.log(err));
    
// };


  render() {
    return (
      <Container fluid>
         {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.department} -Task-  {book.task}
                      </strong>
                    </Link>
                    {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
      </Container>
    );
  }
}

export default DepDetail;
