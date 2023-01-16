import './App.css';
import axios from 'axios';
import {useEffect, useState} from "react";

export const App = () => {
    const [history, setHistory] = useState([]);
    const [data, setData] = useState([]);

    const protocolRegex = /^(?:http:\/\/|https:\/\/)/;
    const urlEndRegex = /\/[a-z-A-Z0-9\/?=,&]*/;

    const getDomain = (url) => {
        url.replace(protocolRegex, '');
        url.replace(urlEndRegex, '');

        return url;
    }

    useEffect(() => {
        axios.get('https://api.spacexdata.com/v4/history')
            .then(response => {
                setHistory(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        axios.get('https://api.spacexdata.com/v4/launches')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    return (
        <div className={"app"}>
            <h1>ReactJs x SpaceX</h1>
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
            <div className={"history"}>
                <h2>History</h2>
                <div className={"history-response"}>
                    <div>
                        {
                            history.map(item => (
                                <div key={item.id}>
                                    <h3>{item.title}</h3>
                                    <p>{item.details}</p>
                                    {null !== item.links.article && (
                                        <p>Article: <a href={item.links.article}>{getDomain(item.links.article)}</a></p>
                                    )}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
