// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./page/Chat";

function App() {
  return (
    <div className="App bg-[#FAF9F4]">
   
        <Chat />
     

      {/* <BrowserRouter>
     <Routes>
      <Route path="/" element={<Chat/>}>
        <Route index element={<Chat/>} />

      </Route>
     </Routes>
     </BrowserRouter> */}
    </div>
  );
}

export default App;
