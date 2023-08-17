import PropTypes from 'prop-types';

function FeedbackStats({ arrOfObj }) {

    // function avgRating () {
    //     let n = arrOfObj.length;
    //     if (n === 0) return 0;
    //     let totalRating = 0;
    //     for (let i=0; i<n; i++) totalRating += arrOfObj[i].rating;
    //     return totalRating / n;
    // }

    const average =
        arrOfObj.length === 0
            ? ""
            : arrOfObj.reduce((acc, { rating }) => acc + rating, 0) / arrOfObj.length

    return (
        <div className="feedback-stats">
            <h4 className="feedback-stats"> Reviews    : {arrOfObj.length} </h4>
            {/* avgrating upto 1 decimal places and removing if any trailing 0s present */}
            <h4 className="feedback-stats"> {average && `Avg Rating : ${average.toFixed(1).replace(/[.,]0$/, '')}`}   </h4>
            {/* <h4 className="feedback-stats"> Avg Rating : {avgRating()}   </h4> */}
        </div>
    )
}


FeedbackStats.propTypes = {
    arrOfObj : PropTypes.array.isRequired,
}



export default FeedbackStats;
