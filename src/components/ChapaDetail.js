import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ChapaDetail = () => {

    const [chapa, setChapa] = useState("")
    const { id } = useParams();

    //Consumindo dados da api server dados do condutor um em especifico
    const getSingleChapa = async () => {
        const { data } = await axios.get(`http://localhost:8000/api/${id}`)
        console.log(data)
        setChapa(data)
    }

    useEffect(() => {
        getSingleChapa();
    },)
    

    return (
        <div>
            <h1><strong>Detalhes do Chapa</strong></h1>
            <br />
            
            <Container maxWidth="sm">
                <Card sx={{ maxWidth: 1345 }}>
                    <CardActionArea>
                        <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                        <p><strong>Condutor:</strong> {chapa.name}</p>
                        </Typography>
                        <Typography variant="body6" color="text.secondary">
                            <p><strong>Email:</strong> {chapa.email}</p>
                            <p><strong>Endereco:</strong> {chapa.address}</p>
                            <p><strong>Celular:</strong> {chapa.phone}</p>
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Container>
           
        </div>

        
    );
};

export default ChapaDetail;