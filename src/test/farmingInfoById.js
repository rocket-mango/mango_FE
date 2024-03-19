import React,{useState, useEffect} from "react";
import {useParams} from 'react-router-dom';

function FarmingInfoById() {
    const {fid} =useParams();
    const [farminginfo, setFarminginfo] = useState(null);

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const response= await fetch(`http://localhost:8080/api/farmingInfo/${fid}`);
                if(!response.ok){
                    throw new Error('Network response error');
                }
                const responseData= await response.json();
                setFarminginfo(responseData);

            }catch(error){
                console.error("Error fetching data : ", error);
            }
        };

    },[fid]);
    return (
        <div>
        <h1>Farming Info Details</h1>
        {farminginfo ? (
          <div>
            <h2>{farminginfo.title1}</h2>
            <p>{farminginfo.content1}</p>
            <img src={farminginfo.imageurl1} alt={farminginfo.title1} />
            {farminginfo.youtubeurl && (
              <div>
                <h3>Watch on YouTube</h3>
                <a href={farminginfo.youtubeurl} target="_blank" rel="noopener noreferrer">
                  Link
                </a>
              </div>
            )}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
}

export default FarmingInfoById;