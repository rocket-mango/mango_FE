import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';

function FarmingInfoAll() {
    //변수 받아오기
    const [farmingInfo, setFarmingInfo] = useState(null);

    //fetch 하기
    useEffect(() => {
        const fetchData=async () => {
            try {
                //이 부분은 IP에 따라 달라집니다! 변경필요
                const response = await fetch('http://localhost:8080/api/farmingInfo/all');
                if(!response.ok){
                    throw new Error('Network response not ok');
                }
                const responseData = await response.json();
                setFarmingInfo(responseData.farmingInfo);

            }catch(error) {
                console.error('Error fetching data : ', error);
            }
        };
    fetchData();
    }, []);

    return (
        <div>
            <h1>Farming Information</h1>
            <ul>
                {farmingInfo ? (
                    farmingInfo.map(info => (
                        <li key={info.fid}>
                        <h2>{info.topic}</h2>
                        <ul>
                            <li>
                            <h3><Link to={`/farmingInfo/${info.fid}`}>{info.title1}</Link></h3>
                            <p>{info.content1}</p>
                            <img src={info.imageurl1} alt={info.title1} />
                            </li>
                            <li>
                            <h3>{info.title2}</h3>
                            <p>{info.content2}</p>
                            <img src={info.imageurl2} alt={info.title2} />
                            </li>
                            {info.youtubeurl && (
                            <li>
                                <h3>Watch on YouTube</h3>
                                <a href={info.youtubeurl} target="_blank" rel="noopener noreferrer">
                                Link
                                </a>
                            </li>
                            )}
                        </ul>
                        </li>
                    ))
                ) : (
                <p>Loading...</p>
                )}
            </ul>
        </div>
    );
}

export default FarmingInfoAll;