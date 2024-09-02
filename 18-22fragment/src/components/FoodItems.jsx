import Item from "./Item";

function FoodItems({foodItems}){

    return <>
        {foodItems.map(item=>
            <Item key={item} foodItem={item} />
        )}
    </>
}

export default FoodItems;