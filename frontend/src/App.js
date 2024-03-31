import { Route, Routes, Navigate } from "react-router-dom";
// import AllBooks from "./pages/AllBooks";
// import NewBook from "./pages/NewBook";
// import BookDetail from "./pages/BookDetail";
//import Layout from "./components/layout/Layout";
// import NotFound from "./pages/NotFound";
import MainPage from "./pages/MainPage";
// import AuthPage from "./pages/AuthPage";
// import AboutPage from "./pages/AboutPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    // <Layout>
    // <Routes>
    //   <Route path="/" exact>
    //     <Navigate to="/home" />
    //   </Route>
    //   {/* { <Route path="/books" exact>
    //       <AllBooks />
    //     </Route>
    //     <Route path="/books/:bookId">
    //       <BookDetail />
    //     </Route>
    //     <Route path="/new-book">
    //       <NewBook />
    //     </Route> } */}
    //   <Route path="/home" exact>
    //     <HomePage />
    //   </Route>
    //   {/* <Route path="/auth">
    //       <AuthPage />
    //     </Route>
    //     <Route path="/about">
    //       <AboutPage />
    //     </Route>
    //     <Route path="*">
    //       <NotFound />
    //     </Route> */}
    // </Routes>
    // // </Layout>
  );
}

export default App;
// mport { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="*" element={<Navigate to="/" />} />
//   </Routes>
// </BrowserRouter>;
