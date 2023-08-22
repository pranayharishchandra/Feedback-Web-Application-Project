import { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 }            from 'uuid';
// import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext();

// import { FeedbackProvider } from './context/FeedbackContext';
// FeedbackProvider -> is not a default, so using { } to import
export function FeedbackProvider ({ children }) {
    // feedBack -- below is an arrayOfObj, which we are actually taking as an output
    // const [feedBack_arrObj, setFeedBack] = useState([  ...FeedbackData ]);
    const [feedBack_arrObj, setFeedBack] = useState([ ]);

    // const [feedBack_arrObj, setFeedBack] = useState([
        //     {
            //         id: 1,
            //         text: "item from context",
            //         rating: 10,
            //     }
            // ]);
            
    const [isLoading, setIsLoading] = useState(true); // set this to true or false, as u wish

    // if (feedBack_arrObj.length === 0 || !feedBack_arrObj) {

    // }

    useEffect (() => {
        console.log("hello from useEffect FeedbackContext");
        fetchFeedback();
    }, []);


    // Feedback
    async function fetchFeedback () {
        const response = await fetch(`http://localhost:5000/feedback?l_sort=id&_order=desc`);
        const data = await response.json();

        setFeedBack(data);
        // console.log(data);
        setIsLoading(false);
    }











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
                        isLoading,
                        }}>
        {children}
    </FeedbackContext.Provider>)

}





export default FeedbackContext;
