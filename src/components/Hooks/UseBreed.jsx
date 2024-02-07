import { useState, useEffect ,useCallback} from "react";

const UseBreed=(animal)=>{
    const [breeds, setBreeds] = useState([]);
 

    const fetchbreed =useCallback( async () => {
        console.log(animal)
        
        const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
    
        const json = await res.json();
        console.log(res)
        //localCache[animal] = json.breeds || [];
        setBreeds(json.breeds);
      })

      useEffect( () => {
       if(animal)
       fetchbreed();
       
    
      }, [animal]);
      return breeds;

}
export default UseBreed;