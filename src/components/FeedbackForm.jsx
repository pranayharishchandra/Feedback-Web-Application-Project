import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button";


function FeedbackForm() {
    const [text, setText] = useState("");

    function textChangeHandler (e) {
        setText(e.target.value);
        console.log(text);
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
                    version='secondary'
                    >send</Button>

      </div>
            <p>Current input value: {text}</p>

    </Card>
  )
}

export default FeedbackForm
