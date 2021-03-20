import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const expense = {
        id: '10',
        description: 'Test expense',
        note: 'test note',
        amount: 200,
        createdAt: 0
    }
    const state = expensesReducer(expenses, {type: 'ADD_EXPENSE', expense})
    expect(state).toEqual([...expenses, expense])
})

test('should edit an expense', () => {
    const state = expensesReducer(expenses, {type: 'EDIT_EXPENSE', id: '1', updates: {note: 'updated note'}})
    expect(state).toEqual([
        {
            id: '1',
            description: 'Gum',
            note: 'updated note',
            amount: 195,
            createdAt: 0
        },
        expenses[1], expenses[2]
    ])
})

test('should not edit an expense if expense not found', () => {
    const state = expensesReducer(expenses, {type: 'EDIT_EXPENSE', id: '-1', updates: {note: 'updated note'}})
    expect(state).toEqual(expenses)
})

test('should set expenses', () => {
    const newExpenses = [{
        id: '8',
        description: 'Gum',
        note: 'updated note',
        amount: 195,
        createdAt: 0
    }]
    const state = expensesReducer(expenses, {type: 'SET_EXPENSES', expenses: newExpenses})
    expect(state).toEqual(newExpenses)
})