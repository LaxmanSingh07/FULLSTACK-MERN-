import './iteamDate.css'

function ItemDate(props)
{
    // const Day="Monday";
    // const Date="10th March"
    // const Year="2021"
    return(
        <div className='mfg-date'>
            <h2>{props.day}</h2>
            <p>{props.month}</p>
            <p>{props.year}</p>
        </div>
    )
}
export default ItemDate;