import Header from './components/Header'
// import FeedbackItem from './components/FeedbackItem'
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';



import { useState } from 'react';

/** APIs AND DATA ARE MANAGED IN APP, not the components */

function App() {
    const [feedackArrOfObj, setFeedackArrOfObj] = useState(FeedbackData);

    function deleteFeedback (id) {
        setFeedackArrOfObj( feedackArrOfObj.filter( (obj) => obj.id !== id ))
    }

    return (
        <>
            <Header/>
            <FeedbackForm />
            <FeedbackStats arrOfObj={feedackArrOfObj}/>
            <div className='container'>

                <FeedbackList arrOfObj={feedackArrOfObj}
                              handleDelete={(id) => deleteFeedback(id)} />
                            

            </div>

        </>
    )
}

export default App;