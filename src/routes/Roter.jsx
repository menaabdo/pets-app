import App from "../App";
import Details from "../components/Details";
import SearchParams from "../components/SearchForm";
import PathConstants from "./pathConstants";
import NotFound from "../components/notfound";
import{Route, Routes} from 'react-router-dom'


const MyRouts=()=>{
// const Myrouter = createBrowserRouter([
//   { path:PathConstants.home, element: <App /> },

//   { path:PathConstants.detailes, element: <Details /> },

 
// ]);
return(
   
  <Routes>
  <Route path="/details/:id" element={<Details />} />
  <Route path="/" element={<SearchParams />} />
  <Route path="*" element={<NotFound />} />
</Routes>
          
        
    
    );
};
export default MyRouts;