import React,{useState} from 'react';

const AddToCart= ({addItemToCart}) => {

    const [item, setItem] = useState({});
    const [id, setId] = useState(1);

    const updateItem = (key,value) => {
        const tempObj = {...item};
        tempObj[key] = value

        setItem({...tempObj, id:id});
    }

    const addToCart = () => {
        addItemToCart(item);
        setId(id + 1);
        console.log(item);
        Array.from(document.getElementsByTagName('input')).forEach(element => {
            element.value = "";
        })
    };

    return (
        <>
        <input type="text" placeholder='Enter item name' onChange={(event) => {updateItem('name', event.target.value)}}/>
        <input type="number" placeholder='Enter quantity' min="1" onChange={(event) => {updateItem('quantity', event.target.value)}}/>
        <input type="text" placeholder='Enter price' onChange={(event) => {updateItem('price', event.target.value)}}/>
        <button onClick={addToCart}>Add to cart</button>
        </>
    );
};

export default AddToCart;