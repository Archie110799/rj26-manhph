import React, { useState } from "react";

interface IObject {
  title: string;
  content: string;
}

interface IProps {
  item: IObject;
}

function ItemAcc(props: IProps) {
  const { item } = props;
  const [isShowContent, setIsShowContent] = useState(false);
  return (
    <>
      <div>
        <div onClick={() => setIsShowContent(!isShowContent)}>{item.title}</div>
        {isShowContent && <div>{item.content}</div>}
      </div>
    </>
  );
}

export default ItemAcc;
