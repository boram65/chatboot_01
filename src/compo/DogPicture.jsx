// new file called DogPicture.jsx
import React, { useEffect, useState } from "react";

const img_style = {
  width: "100%",
};

const DogPicture = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => {
        setImageUrl(data.message);
      });
  }, []);

  return (
    <div>
      <img src={imageUrl} alt="a dog" style={img_style} />
    </div>
  );
};

export default DogPicture;
