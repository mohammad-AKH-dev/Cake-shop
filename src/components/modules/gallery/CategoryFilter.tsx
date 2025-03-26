import React from "react";

type CategoryFilterPropsType = {
  title: string;
  isActive: boolean
  onChange: (category: string) => void
};

function CategoryFilter({ title , isActive, onChange}: CategoryFilterPropsType) {
  return (
    <h3 onClick={() => onChange(title)}
      className={`category uppercase text-[#9b9b9b] text-[14px] tracking-wider relative
          font-bold after:absolute after:-bottom-3 after:bg-primary after:rounded-lg after:h-1 after:right-0 after:left-0 
          cursor-pointer after:transition-all hover:after:w-full after:z-50 ${isActive ? 'after:w-full' : 'after:w-0'}`}
    >
      {title}
    </h3>
  );
}

export default CategoryFilter;
