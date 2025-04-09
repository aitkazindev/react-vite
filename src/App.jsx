import React, { useState } from "react";
import Header from "./components/Header";

import TeachingSection from "./components/TeachingSection";
import DifferenceSection from "./components/DifferenceSection";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import FeedbackSection from "./components/FeedbackSection";

const App = () => {
  const [tab, setTab] = useState("feedback");

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSection active={tab} />

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
      </main>
    </>
  );
};

export default App;
