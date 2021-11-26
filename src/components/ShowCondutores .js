import axios from 'axios';
import { useState, useEffect} from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

const ShowCondutores = () => {

    const [condutores, setCondutores] = useState([])

    const getProducts = async () => {
        const response = await axios.get('http://localhost:8000/api/')
        setCondutores(response.data)
        console.log(response.data)
    }

    useEffect(() => {
        getProducts();
    }, [])
    return (
        <div>
            <h1><strong>Forms Cadastrados</strong></h1>
            {
                condutores.map((product, index) => (
                    <Container maxWidth="sm">
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                                <p><strong>Condutor:</strong> {product.name}</p>
                                </Typography>
                                <Typography variant="h5" component="div">
                                <p><strong>Condutor:</strong> {product.address}</p>
                                </Typography>
                                <Typography sx={{ mb: 1, fontSize: 16  }} color="text.secondary">
                                <p><strong>Email do condutor:</strong>{product.email}</p>
                                </Typography>
                                <Typography sx={{ fontSize: 15 }} variant="body2">
                                    <p>Celular: {product.phone}</p>
                                    <br />
                                </Typography>
                                <Link className="btn btn-primary mr-2" to={`/${product.id}`}>Visualizar detalhes</Link>
                            </CardContent>
                        </Card>
                        <br /> 
                    </Container> 
                    )
                )
            }
        </div>
    );
};

export default ShowCondutores;