import Header from './components/Header'
// import FeedbackItem from './components/FeedbackItem'
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import { useState } from 'react';

/** APIs AND DATA ARE MANAGED IN APP, not the components */

function App() {
    const [feedackArrOfObj, setFeedackArrOfObj] = useState(FeedbackData);


    return (
        <>
            <Header/>
            <div className='container'>

                <FeedbackList arrOfObj={feedackArrOfObj} />

            </div>
        </>
    )
}

export default App;