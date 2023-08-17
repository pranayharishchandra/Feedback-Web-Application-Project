import Card from './shared/Card';
import { FaTimes } from 'react-icons/fa';


function FeedbackItem ({obj, handleDelete}) {

    // function closeHandler(id) {
    //     console.log(id);
    // }





    const darkMode = true;


    return (
        <Card children={'oh yeah'} reverse={darkMode}>
            <div className="num-display">{obj.rating}</div>

            <button className='close' onClick={() => handleDelete(obj.id)}>
                <FaTimes color='red' />
            </button>

            <div className="text-display">{obj.text}</div>

        </Card>
    )
}

export default FeedbackItem;