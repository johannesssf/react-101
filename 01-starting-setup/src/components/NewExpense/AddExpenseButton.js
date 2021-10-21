const AddExpenseButton = (props) => {
    const showAddExpenseForm = () => {
        props.onShowNewExpenseForm(true);
    };

    return (
        <div>
            <button onClick={showAddExpenseForm} type="button">Add New Expense</button>
        </div>
    )
};

export default AddExpenseButton;
