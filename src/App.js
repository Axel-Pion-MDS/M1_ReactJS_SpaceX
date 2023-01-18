import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const App = () => {

    return (
        <div className={"app"}>
            <h1>ReactJs x SpaceX</h1>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
            >
                <Button variant={"contained"} href={"/history"}>History</Button>
                <Button variant={"contained"} href={"/launches"}>Launches</Button>
                <Button variant={"contained"} href={"/capsules"}>Capsules</Button>
            </Stack>
        </div>
    )
}
