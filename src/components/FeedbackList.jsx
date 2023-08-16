// feedbacklist is : list of feedBackItem
// so this component will generate many feedBackItem
// so i have named it feedBackList


import FeedbackItem from "./FeedbackItem";

// function FeedbackList(props) {
//     const arrOfObj = props.arrOfObjj;
function FeedbackList({arrOfObj}) {  // name of prop is arrOfObj

    if (arrOfObj.length === 0 || !arrOfObj)
        return (
            <p>NO FEEDBACKS</p>
    )

    return (
        <div>
            {   // to write the js part.. write it within { }
                arrOfObj.map( (obj) => <FeedbackItem key={obj.id} obj={obj} /> )
            }
        </div>
    )
}

export default FeedbackList;


