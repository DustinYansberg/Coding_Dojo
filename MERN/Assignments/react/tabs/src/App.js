import "./App.css";
import Tabs from "./component/Tabs";
import Content from "./component/Content";
import { useState } from "react";

function App() {
  const [tabs, setTabs] = useState([
    { label: "Tab 1", content: "This is content for tab 1", isActive: true },
    { label: "Tab 2", content: "This is content for tab 2", isActive: false },
    { label: "Tab 3", content: "This is content for tab 3", isActive: false },
  ]);

  // used for setting what content is passed to the content component
  const [currContent, setCurrContent] = useState(tabs[0].content);
  const content = (idx) => setCurrContent(tabs[idx].content);

  const updateActiveTab = (tabIdx) => {
    // adds black background to the header of the active tab, removes it from previously active tab
    const tabsCopy = [...tabs];
    for (const tab of tabsCopy) {
      tab.isActive = false;
    }
    tabsCopy[tabIdx].isActive = !tabsCopy[tabIdx].isActive;
    setTabs(tabsCopy);
  };

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginLeft: "20%",
          marginRight: "20%",
          marginBottom: "5%",
          marginTop: "5%",
          gap: "25px",
        }}
      >
        {tabs.map((tab, index) => {
          return (
            <Tabs
              key={index}
              idx={index}
              tab={tab}
              content={content}
              updateActiveTab={updateActiveTab}
            />
          );
        })}
      </div>
      <Content currContent={currContent} />
    </div>
  );
}

export default App;
