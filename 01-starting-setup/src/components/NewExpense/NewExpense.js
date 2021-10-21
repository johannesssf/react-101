import React, { useState } from "react";
import AddExpenseButton from "./AddExpenseButton";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showAddExpenseForm, setShowAddExpenseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  if (showAddExpenseForm) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onCloseNewExpenseForm={setShowAddExpenseForm}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      </div>
    );
  }

  return (
    <div className="new-expense">
      {<AddExpenseButton onShowNewExpenseForm={setShowAddExpenseForm} />}
    </div>
  );
};

export default NewExpense;
