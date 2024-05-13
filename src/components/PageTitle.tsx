import React from "react";
import { FiChevronsRight } from "react-icons/fi";

interface props {
  title: string | undefined;
}

const PageTitle: React.FC<props> = props => {
  return (
    <div className="flex items-center gap-1 font-medium text-gray-900 mb-3">
      <FiChevronsRight className="text-gray-500 self-center" />
      <h2 className="text-lg">{props.title}</h2>
    </div>
  );
};

export default PageTitle;
