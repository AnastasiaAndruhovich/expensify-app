import expenses from '../fixtures/expenses'
import getExpensesTotal from '../../selectors/expenses-total'

test('should calculate total amount of the empty expenses', () => {
    const result = getExpensesTotal([]);
    expect(result).toEqual(0)
})

test('should calculate total amount for single expense', () => {
    const result = getExpensesTotal([expenses[0]]);
    expect(result).toEqual(195)
})

test('should calculate total amount of the expenses', () => {
    const result = getExpensesTotal(expenses);
    expect(result).toEqual(114195)
})