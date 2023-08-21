import { createContext, useState } from 'react';
import { v4 as uuidv4 }            from 'uuid';
import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext();

// import { FeedbackProvider } from './context/FeedbackContext';
// FeedbackProvider -> is not a default, so using { } to import
export function FeedbackProvider ({ children }) {
    // feedBack -- below is an arrayOfObj, which we are actually taking as an output
    const [feedBack_arrObj, setFeedBack] = useState([       
            ...FeedbackData
    ]);

    // const [feedBack_arrObj, setFeedBack] = useState([
    //     {
    //         id: 1,
    //         text: "item from context",
    //         rating: 10,
    //     }
    // ]);

    // handleDelete
    function deleteFeedback(id) {
        setFeedBack(feedBack_arrObj.filter((obj) => obj.id !== id))
    }

    // addFeedback
    function addFeedback(newFeedbackObj) {
        newFeedbackObj.id = uuidv4();
        setFeedBack([newFeedbackObj, ...feedBack_arrObj]);

        // console.log("app", newFeedbackObj)
    }

    // editFeedback
    const [feedbackEdit, setFeedbackEdit] = useState({
        feedbackItem: {   },
        edit: false,
    });

    // set item to be updated
    function editFeedback (feedbackItemObj) {
        setFeedbackEdit({
            feedbackItem : feedbackItemObj,
            edit : true,
        })
    }

    // update feedback
    function updateFeedback (id, newFeedback) {
        console.log("updateFeedback", id, newFeedback);
        // UPDATING THE FEEDBACK WHEN SEND CLICKED
        setFeedBack(
            feedBack_arrObj.map((obj) => 
                (obj.id === id) 
                    ? { id, ...newFeedback }
                    : obj
            )
        )
    }


    // passing an 'arrayOfObj' as an obj
    return (<FeedbackContext.Provider value={{ 
                        arrOfObj: feedBack_arrObj,
                        handleDelete: deleteFeedback,
                        addFeedback,
                        feedbackEdit,
                        editFeedback,
                        updateFeedback,
                        }}>
        {children}
    </FeedbackContext.Provider>)

}





export default FeedbackContext;
