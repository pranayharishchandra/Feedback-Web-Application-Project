import { useState } from "react"

import Card from "./shared/Card"
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";


import { useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";




// function FeedbackForm({ addFeedback }) {
function FeedbackForm() {
    const [text, setText] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);// it will be disabled until we write 10 characters
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState(10);

    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

    useEffect(() => {
        console.log("hello, you clicked edit",)
        if (feedbackEdit.edit === true) {
            // feedbackEdit.edit is true becuase it's state have changed by clikcing the edit button in feedbackItems,
            // clicking that called the editFeedback fuction in FeedbackContext and 
            // that function changed it's state
            // and after it's state was changed then this useEffect function was called, which first verified that that is that the item we want to change... 
            // may be doning it is useless
            setBtnDisabled(false);
            setText(feedbackEdit.feedbackItem.text);
            setRating(feedbackEdit.feedbackItem.rating);
        }
    }, [feedbackEdit]);

    



    function textChangeHandler(e) {

        if (text.length === 0) {
            setMessage(null);
            // setMessage("");
            setBtnDisabled(true);
        }
        else if (text.trim().length < 10) {
            setMessage("Type atleast 10 characters");
            setBtnDisabled(true);
        }
        else {
            setBtnDisabled(false);
            setMessage(null);

        }
        console.log(text);

        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            setBtnDisabled(false);

            const newFeedback = {
                text,
                rating,
            }

            if (feedbackEdit.edit === true) {
                console.log('edit-mode : on, updating items')
                updateFeedback(feedbackEdit.feedbackItem.id, newFeedback);
                feedbackEdit.edit = false;
            }
            else {
                console.log('edit-mode : off, adding items')
                //   console.log(newFeedback);
                addFeedback(newFeedback);
            }


            setBtnDisabled(true);
            setRating(10);
            setText('');
        }
    }



    return (


        <Card>
            <form onSubmit={handleSubmit}>

                <h2>HOW WOULD YOU RATE THIS SERVICE</h2>

                {/* BOTH THE FOLLOWING METHODS WORSK  */}
                {/* <RatingSelect select={(rating) => setRating(rating)} selected={rating} /> */}
                <RatingSelect select={setRating} selected={rating} />



                {/* TAKING INPUT */}
                <div className="input-group">
                    <input type="text"
                        placeholder="write your review here"
                        value={text}
                        onChange={textChangeHandler}
                    />

                    <Button type="submit"
                        version='secondary'
                        isDisabled={btnDisabled}
                    // onClick={handleSubmit}
                    >
                        Send
                    </Button>

                </div>
                {message}


            </form>
        </Card>
    )
}

export default FeedbackForm
