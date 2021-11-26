import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

const ChapaDetail = () => {

    const [product, setProduct] = useState("")

    const { id } = useParams();

    const getSingleChapa = async () => {
        const { data } = await axios.get(`http://localhost:8000/api/${id}`)
        console.log(data)
        setProduct(data)
    }

    useEffect(() => {
        getSingleChapa();
    }, [])

    return (
        <div>
            <h1><strong>Detalhes do Chapa</strong></h1>
            <br />
            <div className="single-product-info">
                <p><strong>Condutor:</strong> {product.name}</p>
                <p>Email: {product.email}</p>
                <p>Endereco: {product.address}</p>
                <p>Celular: {product.phone}</p>
            </div>
        </div>
    );
};

export default ChapaDetail;