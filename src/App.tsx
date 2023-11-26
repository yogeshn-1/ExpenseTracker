import "./App.css";
import { useState, useEffect } from "react";
import ExpanseFilter from "./ExpanseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseTracker from "./ExpenseTracker";

interface Expenses {
  id: number;
  description: string;
  amount: number;
  category: string;
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [Expanses, setExpanses] = useState<Expenses[]>([]);
  const visibleExpanses = selectedCategory
    ? Expanses.filter((exp) => exp.category === selectedCategory)
    : Expanses;
  useEffect(() => {
    document.title = "Expense Tracker";
  }, []);
  return (
    <div className="container mt-4 p-2">
      <div className="row">
        <div className="col px-4">
          <ExpenseTracker
            submitForm={(exp) =>
              setExpanses([...Expanses, { ...exp, id: Expanses.length + 1 }])
            }
          />
        </div>

        <div className="col px-4">
          <div className="row my-4">
            <ExpanseFilter
              onSelect={(category) => setSelectedCategory(category)}
            />
          </div>
          <div className="row">
            <ExpenseList
              expense={visibleExpanses}
              onDelete={(givenId) =>
                setExpanses(visibleExpanses.filter((exp) => exp.id !== givenId))
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
