import axios from 'axios';
import {useEffect, useState} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import SearchIcon from '@mui/icons-material/Search';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


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
            <Button variant={"contained"} href={"/"}>Return</Button>
            <h2>Launches</h2>
            <TableContainer component={Paper}>
                <Table aria-label={"Launches"}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Patch</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Rocket</TableCell>
                            <TableCell>Launch Date UTC</TableCell>
                            <TableCell>Success</TableCell>
                            <TableCell>Article</TableCell>
                            <TableCell>Video</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map(launch => (
                                <TableRow key={launch.id}>
                                    <TableCell><img className={"patch-image"} src={launch.links.patch.small} alt={"launch patch picture"} /></TableCell>
                                    <TableCell><h3>{launch.name}</h3></TableCell>
                                    <TableCell>{launch.rocket}</TableCell>
                                    <TableCell><p>{launch.date_local}</p></TableCell>
                                    <TableCell><p>{launch.success ? 'Yes' : 'False'}</p></TableCell>
                                    <TableCell>
                                        <Link href={launch.links.article}>
                                            <Button variant={"contained"}>
                                                <SvgIcon component={SearchIcon} inheritViewBox />
                                            </Button>
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <Link href={'https://youtube.com/watch?v=' + launch.links.youtube_id}>
                                            <Button variant={"contained"} sx={{background: '#ff0000'}}>
                                                <SvgIcon component={PlayArrowIcon} inheritViewBox />
                                            </Button>
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>

            <div>

            </div>
        </div>
    );
};