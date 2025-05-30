import React from "react";
import './NewCollections.css'
import new_collection from '../Assests/new_collections'
import Item from "../Items/Item";

function NewCollections(){
    return(
        <div className="newarrivals">
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="newstock">
                {new_collection.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    );
}
export default NewCollections;