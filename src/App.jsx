import React, { useState } from "react";
import Header from "./components/Header/Header";
import EffectSection from "./components/EffectSection";
import TeachingSection from "./components/TeachingSection";
import DifferenceSection from "./components/DifferenceSection";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import FeedbackSection from "./components/FeedbackSection";

const App = () => {
  const [tab, setTab] = useState("effect");
  const [visible, setVisible] = useState(true);

  // setTimeout(() => {
  //   setVisible(false);
  // }, 3000);
  function handleSelection(current) {
    setTab(current);
  }
  return (
    <>
      {visible && <Header />}
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={handleSelection} />

        {tab === "main" && (
          <>
            <TeachingSection />
            <DifferenceSection />
          </>
        )}

        {tab === "feedback" && (
          <>
            <FeedbackSection />
          </>
        )}
        {tab === "effect" && (
          <>
            <EffectSection />
          </>
        )}
      </main>
    </>
  );
};

export default App;
