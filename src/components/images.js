import React from "react"
import image1 from '../images/DSC_0008.JPG'
import image2 from '../images/DSC_0010.JPG'
import image3 from '../images/DSC_0011.JPG'
import image4 from '../images/DSC_0156.JPG'



const ImageArray = [
    image1,image2, image3, image4,
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
]
export default function RandomWelcomePicture() {
    const [currentImageIndex, setCurrentImageIndex] = useState(Math.floor(Math.random() * images.length))
    const changeImage = () => {
      const randomNumber = ;
      setCurrentImageIndex(randomNumber);
    }
    useEffect(() => changeImage(), [])
  
    return (
        <div className="imageSection">
            <Image
            source={images[currentImageIndex]}
            style={styles.imageStyle}/>
            
        </div>
      
    )
  }
