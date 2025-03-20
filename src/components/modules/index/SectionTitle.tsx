import React from "react";

type SectionTitlePropsType = {
    title : string
}

function SectionTitle(props: SectionTitlePropsType) {
  return (
    <h4 className="offers-section__title font-bold text-title text-[55px] uppercase tracking-wider text-center">
      {props.title}
    </h4>
  );
}

export default SectionTitle;
