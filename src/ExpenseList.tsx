interface Expenses {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Prop {
  expense: Expenses[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expense, onDelete }: Prop) => {
  if (expense.length === 0) return null;
  return (
    <table className="table table-bordered table-primary ">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expense.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>$ {expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>$ {expense.reduce((acc, exp) => exp.amount + acc, 0)}</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
