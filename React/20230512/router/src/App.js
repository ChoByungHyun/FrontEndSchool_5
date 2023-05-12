import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to={"/three"}>home</Link>

        {/* 라우트를 감싸줍니다. */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/one" element={<One />} />
          <Route path="/two" element={<Two />} />
          <Route path="/three" element={<Three />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Index() {
  return <h1>hello world0</h1>;
}

function One() {
  return <h1>hello world1</h1>;
}

function Two() {
  return <h1>hello world2</h1>;
}

function Three() {
  return <h1>hello world3</h1>;
}

export default App;
