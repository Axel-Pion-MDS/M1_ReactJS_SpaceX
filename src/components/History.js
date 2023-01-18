import '../App.css';
import axios from 'axios';
import {useEffect, useState} from "react";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";

export const History = () => {
    const [history, setHistory] = useState([]);

    const protocolRegex = /^(?:http:\/\/|https:\/\/)/;
    const urlEndRegex = /\/[a-z-A-Z0-9/?=,&]*/;

    const style = {
        '&.MuiDivider-root': {
            '&::before': {
                borderTop: 'thin solid aliceblue',
            },
            '&::after': {
                borderTop: 'thin solid aliceblue',
            },
        },
        '&.MuiChip-root': {
            backgroundColor: '#4dabf5',
            color: 'aliceblue',
        }
    }

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

    return (
        <div className={"history"}>
            <Button variant={"contained"} href={"/"}>Return</Button>
            <h2>History</h2>
            <List id="history" component="nav" aria-label="history-responses">
                <div>
                    {
                        history.map(item => (
                            <div key={item.id}>
                                <Divider sx={style} textAlign={"left"}>
                                    <Chip sx={style} label={item.title} />
                                </Divider>
                                <p><small>{item.event_date_utc}</small></p>
                                <p>{item.details}</p>
                                {null !== item.links.article && (
                                    <p>Article: <a href={item.links.article}>{getDomain(item.links.article)}</a></p>
                                )}
                            </div>
                        ))
                    }
                </div>
            </List>
        </div>
    );
}