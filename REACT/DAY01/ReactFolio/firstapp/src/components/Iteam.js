//this is known as functional component
import './Iteam.css' //this is used to import css file

function Iteam(props)
{
    return (
        <>
        
        <p className='para'>{props.name}</p> 
        {/* // this is not a html tag, it is a jsx tag
        // jsx is a combination of html and javascript
        //jsx  ---> javascript xml */}
        {props.children}
        </>
    )
}

export default Iteam;