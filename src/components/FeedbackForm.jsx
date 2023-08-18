import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";




function FeedbackForm({addFeedback}) {
    const [text, setText] = useState("")
    const [btnDisabled, setBtnDisabled] = useState(true) // it will be disabled until we write 10 characters
    const [message, setMessage] = useState("")
    const [rating, setRating] = useState(10)



    
    
    
    function textChangeHandler (e) {
        
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

        //   console.log(newFeedback);
          addFeedback(newFeedback);
    

    

          setBtnDisabled(true) ;
          setRating(10) ;
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
