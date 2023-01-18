import axios from 'axios';
import {useEffect, useState} from "react";

export const Capsules = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://api.spacexdata.com/v4/capsules')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return(
        <div className={"capsules"}>
            <h2>Capsules</h2>
            <div className={"capsules-response"}>
                <div>
                    {
                        data.map(capsule => (
                            <div key={capsule.id}>
                                <h3>{capsule.serial}</h3>
                                <p>Launch date: {capsule.original_launch}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};