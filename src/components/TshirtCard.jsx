export default function TshirtCard({
    title,
    //description,
    price,
    imageUrl,
    //_id
}){
    return(
        <>
        <div className="card">
            <img src={imageUrl}/>
            <h3>{title}</h3>
            <p>${price}</p>
            <button>Add to Cart</button>
            </div>
        </>
    )
}