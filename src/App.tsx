import { RouterProvider } from "react-router-dom";
import './App.scss';
import { AnimalProvider } from "./components/AnimalContext";
import { router } from "./Router";

const App = () => {

  return (
    <>
      <AnimalProvider>
        <RouterProvider router={router}></RouterProvider>
      </AnimalProvider>

    </>
  );
}
 
export default App;