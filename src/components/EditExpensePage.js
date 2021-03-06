import React from "react";
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {startEditExpense, startRemoveExpense} from "../actions/expenses";

export class EditExpensePage extends React.Component {
    startEditExpense = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }

    removeExpense = () => {
        this.props.startRemoveExpense({id: this.props.expense.id})
        this.props.history.push('/')
    }

    render() {
        return <div>
            <ExpenseForm expense={this.props.expense} onSubmit={this.startEditExpense}/>
            <button onClick={this.removeExpense}>Remove</button>
        </div>
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch) => ({
    startEditExpense: (id, updates) => dispatch(startEditExpense(id, updates)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);