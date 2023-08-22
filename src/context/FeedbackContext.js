import { createContext, useState, useEffect } from 'react';
// import { v4 as uuidv4 }            from 'uuid';
// import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext();

// import { FeedbackProvider } from './context/FeedbackContext';
// FeedbackProvider -> is not a default, so using { } to import
export function FeedbackProvider({ children }) {
    // feedBack -- below is an arrayOfObj, which we are actually taking as an output
    // const [feedBack_arrObj, setFeedBack] = useState([  ...FeedbackData ]);
    const [feedBack_arrObj, setFeedBack] = useState([]);

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

    useEffect(() => {
        console.log("hello from useEffect FeedbackContext");
        fetchFeedback();
    }, []);


    // Feedback
    async function fetchFeedback() {
        // setIsLoading(true);
        //   "proxy":"http://localhost:5000",
        const response = await fetch(`/feedback?l_sort=id&_order=desc`);
        const data = await response.json();

        setFeedBack(data);
        // console.log(data);
        setIsLoading(false);
    }


    // handleDelete -- from backend
    async function deleteFeedback(id) {

        await fetch(`/feedback/${id}`, {
            method: 'DELETE'
        })

        setFeedBack(feedBack_arrObj.filter((item) => item.id !== id))

    }
    // // handleDelete
    // function deleteFeedback(id) {
    //     setFeedBack(feedBack_arrObj.filter((obj) => obj.id !== id))
    // }

    // addFeedback -- from backend
    async function addFeedback(newFeedbackObj) {
        // since we are doing POST request, so we wrting an object
        // mehod : what to do // header : where to do // body: doing the work
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFeedbackObj),
        })

        const data = await response.json()

        setFeedBack([data, ...feedBack_arrObj])
        // console.log("app", newFeedbackObj)
    }
    // // addFeedback
    // function addFeedback(newFeedbackObj) {
    //     newFeedbackObj.id = uuidv4();
    //     setFeedBack([newFeedbackObj, ...feedBack_arrObj]);
    //     // console.log("app", newFeedbackObj)
    // }

    // editFeedback
    const [feedbackEdit, setFeedbackEdit] = useState({
        feedbackItem: {},
        edit: false,
    });

    // set item to be updated
    function editFeedback(feedbackItemObj) {
        setFeedbackEdit({
            feedbackItem: feedbackItemObj,
            edit: true,
        })
    }

    // update feedback
    async function updateFeedback(id, newFeedback) {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFeedback),
          })
      
          const data = await response.json()
      
          // NOTE: no need to spread data and item
          setFeedBack(feedBack_arrObj.map((item) => (item.id === id ? data : item)))
      
          // FIX: this fixes being able to add a feedback after editing
          // credit to Jose https://www.udemy.com/course/react-front-to-back-2022/learn/lecture/29768200#questions/16462688
          setFeedbackEdit({
            item: {},
            edit: false,
          })
    }
    // // update feedback
    // function updateFeedback(id, newFeedback) {
    //     console.log("updateFeedback", id, newFeedback);
    //     // UPDATING THE FEEDBACK WHEN SEND CLICKED
    //     setFeedBack(
    //         feedBack_arrObj.map((obj) =>
    //             (obj.id === id)
    //                 ? { id, ...newFeedback }
    //                 : obj
    //         )
    //     )
    // }




    // children is basically our whole application .. as you can see in App.js

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
