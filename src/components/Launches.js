import axios from 'axios';
import {useEffect, useState} from "react";

export const Launches = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://api.spacexdata.com/v4/launches')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return(
        <div className={"launches"}>
            <h2>Launches</h2>
            <div className={"launches-response"}>
                <div>
                    {
                        data.map(launch => (
                            <div key={launch.id}>
                                <h3>{launch.name}</h3>
                                <p>Launch date: {launch.date_local}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};