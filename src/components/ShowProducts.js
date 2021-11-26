import axios from 'axios';
import { useState, useEffect} from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

const ShowProducts = () => {

    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const response = await axios.get('http://localhost:8000/api/')
        setProducts(response.data)
        console.log(response.data)
    }

    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
        </Box>
    );

    useEffect(() => {
        getProducts();
    }, [])
    return (
        <div>
            <h1><strong>Forms Cadastrados</strong></h1>
            
            {
                products.map((product, index) => (
                    <Container maxWidth="sm">
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
                                <p><strong>Condutor:</strong> {product.name}</p>
                                </Typography>
                                <Typography variant="h4" component="div">
                                <p><strong>Condutor:</strong> {product.address}</p>
                                </Typography>
                                <Typography sx={{ mb: 1, fontSize: 18  }} color="text.secondary">
                                <p><strong>Email do condutor:</strong>{product.email}</p>
                                </Typography>
                                <Typography sx={{ fontSize: 16 }} variant="body2">
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

export default ShowProducts;