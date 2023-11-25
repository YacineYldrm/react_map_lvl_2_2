import './UnsortedList.scss'
const UnsortedList = (props) => {
    console.log(props);
    return ( 
        <ul className='ul_wrapper'>
            <li>{props.funFact}</li>
        </ul>
    );
}

export default UnsortedList;