import React, { useEffect, useState } from 'react';
import { storage } from './firebaseconfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import './editProduct.scss';

const EditProductForm = ({productId, onUpdateSucces}) =>{
    const apiUrl = process.env.REACT_APP_API_BASE_URL;
    const url = `${apiUrl}products/${productId}`;
    const [product, setProduct] = useState({
        name: '',
        price: '',
        description: '',
        sub_description: '',
        category: '',
        image: '',
    });

    const [imageFile, setImageFile] = useState(null);

    useEffect(()=>{
        const fetchProduct = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setProduct({
                name:data.name,
                price: data.price,
                description: data.description,
                sub_description: data.sub_description,
                category: data.category,
                image: data.image_url,
            });
        };
        fetchProduct();
    }, [productId, url])

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

            const response = await fetch(`${apiUrl}/edit-product/${productId}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...product,
                    image_url: imageUrl,
                }),
            });
            if(response.ok){
                const updatedProduct = await response.json();
                onUpdateSucces(updatedProduct);
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
      <form onSubmit={handleSubmit} className="edit-product-form">
        <h2>Modifică produsul</h2>
        <div>
          <label>Nume Produs</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="ex: Pantaloni sport"
          />
        </div>
        <div>
          <label>Preț</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="ex: 99.99"
          />
        </div>
        <div>
          <label>Descriere</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Scurtă descriere..."
          />
        </div>
        <div>
          <label>Sub_Category</label>
          <textarea
            name="sub_description"
            value={product.sub_description || ''}
            onChange={handleChange}
            placeholder="Subcategorie produs"
          />
        </div>
        <div>
          <label>Category</label>
          <textarea
            name="category"
            value={product.category}
            onChange={handleChange}
            placeholder="ex: Haine"
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
        <button type="submit">Salvează Modificările</button>
      </form>
  );
};
export default EditProductForm;