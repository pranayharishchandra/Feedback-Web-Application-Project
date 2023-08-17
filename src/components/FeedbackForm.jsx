import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button";


function FeedbackForm() {
    const [text, setText] = useState("")
    const [btnDisabled, setBtnDisabled] = useState(true) // it will be disabled until we write 10 characters
    const [message, setMessage] = useState("")



    
    
    
    function textChangeHandler (e) {
        
        if (text.length === 0) {
            setMessage(null);
            // setMessage("");
            setBtnDisabled(true);
        } 
        else if (text.trim().length < 10) {
            setMessage("Type atleast 10 characters");
        } 
        else {
            setMessage(null);
    
        }
        console.log(text);

        setText(e.target.value);
    }



  return (
    <Card>
        HOW WOULD YOU RATE THIS SERVICE
        <div className="input-group">
                <input type="text" 
                    placeholder="write your review here"
                    value={text}
                    onChange={textChangeHandler} />

                <Button type="submit"
                        // version='secondary'
                        isDisabled={btnDisabled}

                        >
                            Send
                        </Button>

        </div>
        {message}


    </Card>
  )
}

export default FeedbackForm
