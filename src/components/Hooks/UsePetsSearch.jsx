import { useQuery } from '@tanstack/react-query';
const fetchPets = async () => {
 


    const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
    
    const json = await res.json();
    //localCache[animal] = json.breeds || [];
    setPets(json.pets);
    console.log(pets)
  };

  
  useEffect(() => {
    if(breed)
    fetchPets();
  },[]); // eslint-disable-line react-hooks/exhaustive-deps

 