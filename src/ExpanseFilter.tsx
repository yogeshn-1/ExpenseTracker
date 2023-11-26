interface Prop {
  onSelect: (category: string) => void;
}

const ExpanseFilter = ({ onSelect }: Prop) => {
  return (
    <select
      id="category"
      className="form-select "
      onChange={(event) => onSelect(event.target.value)}
    >
      <option value="">All categories</option>
      <option value="grocery">Grocery</option>
      <option value="utility">Utilities</option>
      <option value="entertainment">Entertainment</option>
    </select>
  );
};

export default ExpanseFilter;
