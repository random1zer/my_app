import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExpenseList from "./components/expense-list.component";
import EditExpense from "./components/edit-expense.component";
import CreateExpense from "./components/create-expense.component";
import CreateUser from "./components/create-user.component";

function App() {
 return (
   <Router> 
	 <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={ExpenseList} />
      <Route path="/edit/:id" component={EditExpense} />
      <Route path="/create" component={CreateExpense} />
      <Route path="/user" component={CreateUser} />
	 </div> 
  </Router>
 );
}
 
export default App;