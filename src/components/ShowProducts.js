import axios from 'axios';
import { useState, useEffect} from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

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
          •
        </Box>
    );

    useEffect(() => {
        getProducts();
    }, [])
    return (
        <div>
            <h1>Dados Cadastrados</h1>
            {
                products.map((product, index) => (
                    <div>                   
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
                            <p>{product.name}</p>
                            </Typography>
                            <Typography variant="h4" component="div">
                            <p>{product.address}</p>
                            </Typography>
                            <Typography sx={{ mb: 2 }} color="text.secondary">
                            <p>{product.email}</p>
                            </Typography>
                            <Typography variant="body2">
                                
                                <p>{product.phone}</p>
                                <br />
                            </Typography>
                            </CardContent>
                    </Card>
                    </div>
                    )
                )
            }
        </div>
    );
};

export default ShowProducts;