import './Item.css'
function Item(props)
{
    // const pokemon="Pickachu"
    const itemName=props.name;
    return (
        <div className="container">

        <p >{itemName}</p>
        {props.children}

        </div>
    )
}

export default Item;