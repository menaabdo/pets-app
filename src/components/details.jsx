import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
const Details = () => {
    const { id } = useParams();
 
    const navigate = useNavigate();
    const[pet,setPet]=useState(null);
    const fetchPet=async ()=>{const res=await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`)
       return res.json();
    }
    const JJ = useQuery({queryKey:['pet'],queryFn:fetchPet})
    
     let pett=(JJ?.data?.pets[0]);
     setPet(pett)
 
  return (
    <div className="details">
     <div>
          <h1>{pet?.name}</h1>
          <h2>{`${pet?.animal} — ${pet?.breed} — ${pet?.city}, ${pet?.state}`}</h2>
          <button>Adopt {pet?.name}</button>
          <p>{pet?.description}</p>
          <button
            onClick={() => {
              navigate('/');
            }}
          >
            Back
          </button>
        </div>
    </div>
  );
};

export default Details;