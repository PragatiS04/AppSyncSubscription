import React, { useEffect, useState } from "react";
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { getBookById } from "./graphql/queries/book";
import { onBidAddedForSeller } from "./graphql/queries/subscriptions"
import './App.css';
import config from "./amplifyconfiguration.json"

function App() {

  Amplify.configure(config);
  const [book, setBook] = useState(null);

  useEffect(() => {
    const subscription = API.graphql(graphqlOperation(onBidAddedForSeller, {sellerId: "pragatisharma"})).subscribe({
      next: (result) => {
        console.log(result);
      }
    })
  })

  const getBook = async () => {
    // make a call to appsync api
    // const book = await API.graphql(graphqlOperation(getBookById, { id: "97d97d2d-87b6-4e81-97da-8a63a1f8ae9f" }));

    const book = await API.graphql({
      query: getBookById,
      variables: { id: "97d97d2d-87b6-4e81-97da-8a63a1f8ae9f" },
      authMode: 'AWS_IAM'
    });

    setBook(book.data.getBookById);
  }

  const viewBook = () => {
    if (book) {
      return (<article>
        <h3>{book.title}</h3>
        <p>{book.description}</p>
        <p>{book.author}</p>
        <h4>{book.price}</h4>
      </article>)
    }
  }

  return (
    <div>
      {/* <AmplifySignOut /> */}
      <section className="book-section">
        <button onClick={() => getBook()}>Get book details</button>
        <hr />
        {viewBook()}
      </section>
    </div>
  );
}

export default App;
