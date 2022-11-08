import React, { useState } from "react";

function TabsF() {
  const [indexTab, setIndexTab] = useState(1);
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];
  return (
    <>
      <div>
        {tabs.map((item, index) => (
          <button onClick={() => setIndexTab(index)} key={`button-${index}`}>
            Button {index + 1}
          </button>
        ))}
      </div>
      <div>
        {tabs.map((item, index) => (
          <span key={`content-${index}`}>
            {index === indexTab ? item : null}
          </span>
        ))}
      </div>
    </>
  );
}

export default TabsF;
