import   Card      from './shared/Card';
import { FaTimes, FaEdit } from 'react-icons/fa';

import { useContext }  from 'react';
import FeedbackContext from '../context/FeedbackContext';


// function FeedbackItem ( { obj, handleDelete } ) {
function FeedbackItem ( { obj } ) {

    // function closeHandler(id) {
    //     console.log(id);
    // }

    const { handleDelete, editFeedback } = useContext(FeedbackContext);

    const darkMode = true;


    return (
        <Card children={'oh yeah'} reverse={darkMode}>
            <div className="num-display">{obj.rating}</div>

            <button className='close' onClick={() => handleDelete(obj.id)}>
                <FaTimes color='red' />
            </button>

            <button className='edit' onClick={() => editFeedback(obj)}>
                <FaEdit color='yellowgreen' />
            </button>

            <div className="text-display">{obj.text}</div>

        </Card>
    )
}

export default FeedbackItem;