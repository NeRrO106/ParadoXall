import React, { useState } from 'react';
import { storage } from './firebaseconfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const AddProductForm = ({productId, onAddSucces}) =>{
    const apiUrl = process.env.REACT_APP_API_BASE_URL;
    const [product, setProduct] = useState({
        name: '',
        price: '',
        description: '',
        sub_description: '',
        category: '',
        image_url: '',
    });

    const [imageFile, setImageFile] = useState(null);

    const handleChange = (e) =>{
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    };
    const uploadOnFirebase = async(image) =>{
      if(!image) return;
      const imageRef = ref(storage, `${product.category}/${product.name}`);
      const uploadTask = uploadBytesResumable(imageRef, image);
      return new Promise((resolve, reject) =>{
        uploadTask.on(
          'state_changed',
          (snapshot) =>{
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes);
            console.log('Upload is ' + progress + '% done');
          },
          (error) => {
            console.error('Eroare la încărcarea imaginii:', error);
            reject(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                resolve(downloadURL);
            });
          }
        );
      });
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            let imageUrl = product.image_url;
            if (imageFile) {
                imageUrl = await uploadOnFirebase(imageFile);
            }
            console.log({
                ...product,
                image_url: imageUrl,
            });
            const response = await fetch(`${apiUrl}/add-product/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...product,
                    image_url: imageUrl,  // Asigură-te că ai corect `image_url` aici
                }),
            });
            if(response.ok){
                const updatedProduct = await response.json();
                onAddSucces(updatedProduct);
            }
            else{
                console.error('Eroare la actualizare');
            }
        }
        catch(error){
            console.error('Eroare de retea: ', error);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nume Produs</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Preț</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Descriere</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
            />
          </div>
            <div>
                <label>Sub_Category</label>
                <textarea
                name='sub_description'
                value={product.sub_description}
                onChange={handleChange}
                />
            </div>
          <div>
            <label>Category</label>
            <textarea
                name='category'
                value={product.category}
                onChange={handleChange}
            />
          </div>
          <div>
            <label>Imagine</label>
              <input
                type="file"
                name="image"
                onChange={handleImageChange}
              />
          </div>
          <button type="submit" className='btn btn-custom'>Salvează Produs</button>
        </form>
      );
};
export default AddProductForm;