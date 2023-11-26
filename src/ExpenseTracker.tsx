import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description Should be at least 3 characters" }),
  amount: z.number().min(1, { message: "Amount should be provided" }),
  category: z.string().min(1, { message: "Category is required" }),
});

type expenseFormData = z.infer<typeof Schema>;

interface Prop {
  submitForm: (data: expenseFormData) => void;
}

const ExpenseTracker = ({ submitForm }: Prop) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<expenseFormData>({ resolver: zodResolver(Schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        submitForm(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control "
          autoComplete="off"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Choose a Category
        </label>
        <select
          {...register("category")}
          id="category"
          className="form-select "
        >
          <option value=""></option>
          <option value="grocery">Grocery</option>
          <option value="utility">Utilities</option>
          <option value="entertainment">Entertainment</option>
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ExpenseTracker;
