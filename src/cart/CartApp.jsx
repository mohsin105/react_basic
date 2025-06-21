import { useState } from "react";
import { useForm } from "react-hook-form";

const CartApp=()=>{
    const {register, handleSubmit}= useForm();
    const [cart,setCart]=useState([]);
    // const onSubmit=(data)=>{
    //     console.log(data)
    // }

    // Add Item Fucntion 
    const AddToCart=(data)=>{
        const existingItem=cart.find((item)=> item.name===data.name)
        if(existingItem){
            setCart(cart.map((item)=>item.name===data.name? {...item,quantity:item.quantity+1} :item))
        }
        else{
            setCart([...cart,{name:data.name,price:data.price,quantity:1}])
        }
    }

    const IncreaseQuantity=(name)=>{
        setCart(cart.map((item)=>item.name===name? {...item,quantity:item.quantity+1} : item))
    }

    const DicreaseQuantity=(name)=>{
        setCart(cart.map((item)=>item.name===name? {...item,quantity:item.quantity-1} : item).filter((item)=> item.quantity>0));
    }

    const RemoveItem=(name)=>{
        setCart(cart.map((item)=>item.name!=name))
    }
    const totalPrice=cart.reduce((total,item)=>total+item.price*item.quantity,0)
    return(
        <div>
            {/* The form */}
            <form onSubmit={handleSubmit(AddToCart)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input {...register("name")} type="text" id="name"/>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input {...register("price")} type="text" id="price"/>
                </div>
                <button type="submit">Add To Cart</button>
            </form>
            {/* The Cart Item List */}
            <div>
                <h2>Cart List</h2>
                <div className="flex justify-around gap-2">

                    <p>Item name</p>
                    <p>Rate</p>
                    <p>Price</p>
                    <p>Options</p>
                </div>
                {cart.length>0 ? (
                    <div>
                        <div>
                            {cart.map((item)=>(
                                <div key={item.name}
                                className="flex justify-around gap-2"> 
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                    <p>{item.price*item.quantity}</p>
                                    {/* buttons */}
                                    <div>
                                        <button onClick={()=>DicreaseQuantity(item.name)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={()=>IncreaseQuantity(item.name)}>+</button>
                                        <button onClick={()=>RemoveItem(item.name)}>Remove Item</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div>
                            <h3>Total Price: {totalPrice}</h3>
                        </div>
                    </div>  
                ):(
                    <div>Cart Empty</div>
                )}
            </div>
        </div>
    );
};
export default CartApp;