import React from "react";
import { Link } from "react-router-dom";

interface IPropsFeatureField {
  name?: string;
  onDelete?: any;
  onClick?: any;
  itemId?: number;
}

export default function FeatureField(props: IPropsFeatureField) {
  const { name, onDelete, onClick, itemId } = props;
  const handleOnDelete = () => {
    if (onDelete && typeof onDelete === "function") {
      onDelete();
    }
  };

  return (
    <>
      <Link
        type="button"
        className="btn btn-success mx-3"
        to={`/${name}/edit/${itemId}`}
      >
        Edit
      </Link>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => handleOnDelete()}
      >
        Delete
      </button>
    </>
  );
}
