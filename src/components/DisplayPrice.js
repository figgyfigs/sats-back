const DisplayPrice = ({ error, isLoaded, items}) => {
    if(error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                {items.map(item => (
                    <div key={item.id}>
                        {item.price}
                    </div>
                ))}
            </div>
        );
    }
}

export default DisplayPrice;