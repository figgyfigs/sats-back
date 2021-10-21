// const DisplayPrice = ({ error, isLoaded, items}) => {
//     if(error) {
//         return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//         return <div>Loading...</div>;
//     } else {
//         return (
//             <div>
//                 {items.map(item => (
//                     <div key={item.id}>
//                         {item.price}
//                         {console.log(typeof item.price)}
//                     </div>
//                 ))}
//             </div>
//         );
//     }
// }

// export default DisplayPrice;

const DisplayPrice = ({ error, isLoaded, price}) => {
    if(error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <h1>{price}</h1>
                {/* {console.log(items)} */}
            </div>
        );
    }
}

export default DisplayPrice;