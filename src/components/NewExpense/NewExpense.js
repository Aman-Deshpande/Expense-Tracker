import React,{ useState } from 'react';
import "./NewExpense.css"
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isEditing, setisEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
           ...enteredExpenseData ,
           id: Math.random().toString()
        };
        console.log(expenseData);
        props.onaddExpense(expenseData);
        setisEditing(false);
    };

    const startEditingHandler = ()=>{
        setisEditing(true);
    }

    const stopEditingHandler = ()=>{
        setisEditing(false);
    }

    return(
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
};

export default NewExpense;