import React from "react";
import { About, Header, Home, Projects, ServiceCount, Skills } from "./";

const App = () => {
  return (
    <div className="w-full py-20 px-4 lg:px-12 pr-4 lg:pr-32">
      {/* header */}
      <Header />
      <Home />
      <ServiceCount />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
