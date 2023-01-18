import axios from 'axios';
import {useEffect, useState} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


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
            <Button variant={"contained"} href={"/"}>Return</Button>
            <h2>Launches</h2>
            <TableContainer component={Paper}>
                <Table aria-label={"Capsules"}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Serial</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Last Update</TableCell>
                            <TableCell>Reuse count</TableCell>
                            <TableCell>Water landings</TableCell>
                            <TableCell>Land Landings</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map(capsule => (
                                <TableRow key={capsule.id}>
                                    <TableCell><h3>{capsule.serial}</h3></TableCell>
                                    <TableCell><p>{capsule.type}</p></TableCell>
                                    <TableCell><p>{capsule.status}</p></TableCell>
                                    <TableCell><p>{capsule.last_update}</p></TableCell>
                                    <TableCell><p>{capsule.reuse_count}</p></TableCell>
                                    <TableCell><p>{capsule.water_landings}</p></TableCell>
                                    <TableCell><p>{capsule.land_landings}</p></TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};