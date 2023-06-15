import '../App.css';

const DisplayCartItems = ({ cartItems }) => {
    console.log("cartItems in display",cartItems);
    return (
        <>
            <h2>Your cart has:</h2>
            <table>
                <thead>
                    <tr>
                        <td>Item</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Total</td>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(({name, price, quantity, id}) => {
                        price = parseFloat(price).toFixed(2);
                        quantity = parseInt(quantity);
                        return (
                            <tr key={id}>
                                <td>{name}</td>
                                <td>{`R${price}`}</td>
                                <td>{quantity}</td>
                                <td>{`R${(price * quantity).toFixed(2)}`}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
};

export default DisplayCartItems;