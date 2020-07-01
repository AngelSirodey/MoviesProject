// import React, { useState } from 'react';

// const Paginator = () => {
//     const [todos, setTodos] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [todosPerPage, setTodosPerPage] = useState(3);

//     const handleClick = (event) => {
//             setCurrentPage(Number(event.target.id))
//       };

//       const indexOfLastTodo = currentPage * todosPerPage;
//       const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
//       const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
  
//       const renderTodos = currentTodos.map((todo, index) => {
//         return <li key={index}>{todo}</li>;
//       });

//       const pageNumbers = [];
//       for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
//         pageNumbers.push(i);
//       };

//       const renderPageNumbers = pageNumbers.map(number => {
//         return (
//           <li
//             key={number}
//             id={number}
//             onClick={() => handleClick}
//           >
//             {number}
//           </li>
//         );
//       });

//         return (
//             <div>
//                 holaaaaaaaaaaaaaaa
//               <ul>
//                 {renderTodos}
//               </ul>
//               <ul id="page-numbers">
//                 {renderPageNumbers}
//               </ul>
//             </div>
//           );

// };

// export default Paginator;

import React from 'react';

class Paginator extends React.Component {
    constructor() {
      super();
      this.state = {
        todos: ['a','b','c','d','e','f','g','h','i','j','k'],
        currentPage: 1,
        todosPerPage: 3
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(event) {
      this.setState({
        currentPage: Number(event.target.id)
      });
    }
  
    render() {
      const { todos, currentPage, todosPerPage } = this.state;
  
      // Logic for displaying todos
      const indexOfLastTodo = currentPage * todosPerPage;
      const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
      const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
  
      const renderTodos = currentTodos.map((todo, index) => {
        return <li key={index}>{todo}</li>;
      });
  
      // Logic for displaying page numbers
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
        pageNumbers.push(i);
      }
  
      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li
            key={number}
            id={number}
            onClick={this.handleClick}
          >
            {number}
          </li>
        );
      });
  
      return (
        <div>
          <ul>
            {renderTodos}
          </ul>
          <ul id="page-numbers">
            {renderPageNumbers}
          </ul>
        </div>
      );
    }
  }
  
export default Paginator;