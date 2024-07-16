import { useState } from "react";
import data from "./models/books.json";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [books, setBooks] = useState(data);

  return (
    <div>
      <ForgotPassword />

      {/* nesting with specialization */}
      <WelcomeMessage />
    </div>
  );
}

export default App;


// line 8 react 12
// console.log("length: " + books.length);


// /* this shows when the books.json array is empty (i.e [])*/

// if (books.length === 0) {
//   return <P> No books yet ...</P>;
// }

//   return (
//     <div>
//       {/* Without destructuring */}
//       {/* {books.map((book) => (
//         <Book
//           key={book.id}
//           title={book.volumeInfo.title}
//           authors={book.volumeInfo.authors}
//           description={book.volumeInfo.description}
//           price={book.price}
//         />
//       ))} */}
      
//       {/* With destructing */}
//       {books.map((book) => (
//         <Book key={book.id} bookProps={book} />
//       ))}
//     </div>
//   );
// }