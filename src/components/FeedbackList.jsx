// feedbacklist is : list of feedBackItem
// so this component will generate many feedBackItem
// so i have named it feedBackList


import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

// function FeedbackList(props) {
//     const arrOfObj = props.arrOfObjj;
function FeedbackList({ arrOfObj, handleDelete }) {  // name of prop is arrOfObj

    if (arrOfObj.length === 0 || !arrOfObj)
        return (
            <p>NO FEEDBACKS</p>
        )


    return (
        <div>
                <AnimatePresence>

                {   // to write the js part.. write it within { }
                    arrOfObj.map((obj) => (
                                    <motion.div key={obj.id} 
                                                initial={{opacity:0}}
                                                // initial={{display:'hidden'}}
                                                // initial={{display:'none'}}
                                                animate={{opacity:1}}
                                                exit={{opacity:0}}
                                                >
                                         <FeedbackItem key={obj.id} 
                                                        obj={obj} 
                                                        handleDelete={handleDelete}/>
                                    </ motion.div>
                ))}
            </AnimatePresence>
        </div>
    )


    // VERSION WITHOUT ANIMATION 
    // return (
    //     <div>
    //         {   // to write the js part.. write it within { }
    //             arrOfObj.map((obj) => <FeedbackItem key={obj.id} 
    //                                                 obj={obj} 
    //                                                 handleDelete={handleDelete}/>)
    //         }
    //     </div>
    // )
}





FeedbackList.propTypes = {
    arrOfObj: PropTypes.arrayOf(
        PropTypes.shape({
            // id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        }),
    )
}














export default FeedbackList;


