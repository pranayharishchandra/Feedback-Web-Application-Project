import { createContext, useState } from 'react';

const FeedbackContext = createContext();

// import { FeedbackProvider } from './context/FeedbackContext';
// FeedbackProvider -> is not a default, so using { } to import
export function FeedbackProvider ({ children }) {
    // feedBack -- below is an arrayOfObj, which we are actually taking as an output
    const [feedBack_arrObj, setFeedBack] = useState([
        {
            id: 1,
            text: "item from context",
            rating: 10,
        }
    ]);

    // handleDelete
    function deleteFeedback(id) {
        setFeedBack(feedBack_arrObj.filter((obj) => obj.id !== id))
    }


    // passing an 'arrayOfObj' as an obj
    return (<FeedbackContext.Provider value={{ 
                        arrOfObj: feedBack_arrObj,
                        handleDelete: deleteFeedback,
                        }}>
        {children}
    </FeedbackContext.Provider>)

}





export default FeedbackContext;
