import './App.css';
import {
    Box,
    Button,
    Divider,
    FormControl,
    FormGroup,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField, Typography
} from "@mui/material";
import {useState} from "react";
import {DEPORTATION_TIMES_A} from "./times";

function App() {
    const [direction, setDirection] = useState('');
    const [deportationTime, setDeportationTime] = useState('');
    const [returnTime, setReturnTime] = useState('');
    const [ticketsQuantity, setTicketsQuantity] = useState('');

    const handleChangeDirection = (event) => {
        setDirection(event.target.value);
    };
    const handleChangeDeportationTime = (event) => {
        setDeportationTime(event.target.value);
    };
    const handleChangeReturnTime = (event) => {
        setReturnTime(event.target.value);
    };
    const handleChangeTicketsQuantity = (event) => {
        setTicketsQuantity(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(
            'direction:', direction,
            '\ndeportationTime:', deportationTime,
            '\nreturnTime:', returnTime,
            '\nticketsQuantity:', ticketsQuantity)
    }


    return (
        <div className="App">
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >
                <Paper elevation={3} sx={{p: 3, m: 2, minWidth: 350}}>
                    <Grid container spacing={0}>
                        <Grid item xs>
                            <Box sx={{ maxWidth: 350, pr: 3, pl: 3 }}>
                                <form onSubmit={handleSubmit}>
                                    <FormGroup>
                                        <FormControl sx={{ m: 1, minWidth: 220 }}>
                                            <InputLabel id="direction">Направление</InputLabel>
                                            <Select
                                                labelId="direction"
                                                id="direction"
                                                value={direction}
                                                label="Направление"
                                                onChange={handleChangeDirection}
                                            >
                                                <MenuItem value="">{'Выберите направление'}</MenuItem>
                                                <MenuItem value={'из A в B'}>из A в B</MenuItem>
                                                <MenuItem value={'из B в A'}>из B в A</MenuItem>
                                                <MenuItem value={'из A в B и обратно в А'}>из A в B и обратно в А</MenuItem>
                                            </Select>
                                        </FormControl>

                                        <FormControl sx={{ m: 1, minWidth: 220 }}>
                                            <InputLabel id="deportationTime">Время отправления</InputLabel>
                                            <Select
                                                labelId="deportationTime"
                                                id="deportationTime"
                                                value={deportationTime}
                                                label="Время отправления"
                                                onChange={handleChangeDeportationTime}
                                            >
                                                <MenuItem value="">{'Выберите время'}</MenuItem>
                                                {DEPORTATION_TIMES_A.map((time) => {
                                                    return <MenuItem value={time} key={time}>{time}</MenuItem>
                                                })}
                                            </Select>
                                        </FormControl>

                                        <FormControl
                                            sx={{ m: 1, minWidth: 220 }}
                                            disabled={direction !== 'из A в B и обратно в А'}
                                        >
                                            <InputLabel id="returnTime">Обратное время</InputLabel>
                                            <Select
                                                labelId="returnTime"
                                                id="returnTime"
                                                value={returnTime}
                                                label="Обратное время"
                                                onChange={handleChangeReturnTime}
                                            >
                                                <MenuItem value="">{'Выберите время'}</MenuItem>
                                                {DEPORTATION_TIMES_A.map((time) => {
                                                    return <MenuItem value={time} key={time}>{time}</MenuItem>
                                                })}
                                            </Select>
                                        </FormControl>

                                        <FormControl sx={{ m: 1, minWidth: 220 }}>
                                            <TextField
                                                type='number'
                                                id="tickets-quantity"
                                                label="Количество билетов"
                                                value={ticketsQuantity}
                                                onChange={handleChangeTicketsQuantity}
                                            />
                                        </FormControl>
                                    </FormGroup>

                                    <Button variant="contained" type="submit" sx={{m: 1}}>
                                        Посчитать
                                    </Button>
                                </form>
                            </Box>
                        </Grid>

                        <Divider orientation="vertical" flexItem />

                        <Grid item xs>
                            <Box sx={{ maxWidth: 350, minWidth: 220, pr: 3, pl: 3 }}>
                                <Typography variant='h5' gutterBottom sx={{textAlign: 'center'}}>Результат:</Typography>
                                <Typography>{`Вы выбрали ${ticketsQuantity} билета по маршруту ${direction} стоимостью 4000р.
                  Это путешествие займет у вас 40 минут.
                  Теплоход отправляется в ${deportationTime}, а прибудет в 18-00.`}</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    );
}

export default App;
