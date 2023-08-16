


function FeedbackItem ({obj}) {

    return (
        <div className="card">
            <div className="num-display">{obj.rating}</div>
            <div className="text-display">{obj.text}</div>

        </div>
    )
}

export default FeedbackItem;