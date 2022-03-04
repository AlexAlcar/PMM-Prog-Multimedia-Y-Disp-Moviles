import React, {useState,useEffect} from 'react';

const Body = () => {
    const time=1000;
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    const [currentImage, setCurrentImage] = useState(0);

    const photoChange = ()=>{
        if(currentImage==images.length-1)setCurrentImage(0);
        else setCurrentImage(currentImage+1);
        console.log(currentImage);
    }

    useEffect(()=>{
        console.log('patata');
        setTimeout(photoChange,500);
        
    })

    
    

    return (
        <div>
            <p className="parrafo">Este es el cuerpo de la página web</p>
            <div class="carousel">
                <img src={`./${images[currentImage]}`} />
            </div>

        </div>
    )


}

export default Body;