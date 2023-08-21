import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LandingCarousel from '../../components/LandingCarousel/LandingCarousel';
import './LandingPage.css'

const LandingPage = () => {

    const [product, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            const { data } = await axios.get("http://localhost:3001/coffee/")
            setProducts(data)
        }
        getProducts()
    }, [])

    const mappedData = product.slice(0, 3);

    return (
        <div className="landing-page">
            <div className='landin-video-cont'>
                <video id="hero-video" className="hero-video" playsInline loop muted autoPlay>
                    <source src="https://cdn.shopify.com/s/files/1/1786/7381/files/hero-new.mp4?93" type="video/mp4" />
                </video>
            </div>

            <div className="landin-message-main">
                <p>SABORES DE TODO EL MUNDO A UN CLICK DE DISTANCIA...</p>
                <Link to="/productos">COMPRAR CAFÉ</Link>
            </div>

            <div className='ladin-p1-cont'>
                <h1>Nuestros Productos Más Vendidos</h1>
                <LandingCarousel topSold={mappedData} />
            </div>

        </div>
    );
};

export default LandingPage;
