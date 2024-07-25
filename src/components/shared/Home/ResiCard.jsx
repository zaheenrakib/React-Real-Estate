


const ResiCard = ({ aResi }) => {

    const { id, estate_title, description, price, status, area, location, image, segment_name } = aResi;

    return (
        <>
           
                {
                    
                        <div className="card bg-base-100 shadow-xl">
                            <figure><img src={image} alt={estate_title} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{estate_title}</h2>
                                <p>Locations: {location}</p>
                                <p>{description}</p>
                                <p>Price: {price}</p>
                                <div className="card-actions justify-between">
                                    <h1 className="text-2xl font-bold">{segment_name}</h1>
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    
                }

        </>
    );
};

export default ResiCard;