import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Expense = props => (
  <tr>
    <td>{props.expense.username}</td>
    <td>{props.expense.description}</td>
    <td>{props.expense.amount}</td>
    <td>{props.expense.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.expense._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExpense(props.expense._id) }}>delete</a>
    </td>
  </tr>
)


export default class ExpenseList extends Component {
  constructor(props) {
  super(props);  
	  this.deleteExpense = this.deleteExpense.bind(this);  
	  this.state = {expense: []};
   }

componentDidMount() {
  axios.get('https://expenselog.run-us-west1.goorm.io/expense/')
   .then(response => {
     this.setState({ expense: response.data });
   })
   .catch((error) => {
      console.log(error);
   })
}
	
deleteExpense(id) {
  axios.delete('https://expenselog.run-us-west1.goorm.io/expense/'+id)
    .then(res => console.log(res.data));  
	this.setState({
    expense: this.state.expense.filter(el => el._id !== id)
  })
}
	
expenseList() {
  return this.state.expense.map(currentexpense => {
    return <Expense expense={currentexpense} deleteExpense={this.deleteExpense} key={currentexpense._id}/>;
  })
}
 
 render() {
    return (
      <div>
  <h3>Expense log</h3>
  <table className="table">
    <thead className="thead-dark">
      <tr>
        <th>Username</th>
        <th>Description</th>
        <th>Amount</th>
        <th>Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      { this.expenseList() }
    </tbody>
  </table>
</div>
    )
  }
}