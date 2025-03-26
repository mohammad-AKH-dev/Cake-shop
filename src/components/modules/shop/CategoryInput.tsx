import React from "react";

type CategoryInputPropsType = {
  value: string;
  checked: boolean;
  count: number;
  onChange : (event: string) => void
};

function CategoryInput(props: CategoryInputPropsType) {
  const { value, checked, count , onChange} = props;
  return (
    <div className="category-input flex items-center justify-between">
      <div className="category flex items-center gap-x-3">
        <input type="checkbox" className="border checked:bg-primary border-[#e1e1e1] w-[21px] h-[21px]
        outline-none rounded-[3px]" checked={checked && checked} onChange={() => onChange(value) }/>
        <span className="category-name capitalize">{value}</span>
      </div>
      <span className="category-count">({count})</span>
    </div>
  );
}

export default CategoryInput;
