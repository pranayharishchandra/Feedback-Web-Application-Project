// import { Navigate, useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "./shared/Card";

import PropTypes from 'prop-types';

function Post({status}) {

    const navigate_var = useNavigate();
    console.log(status, 'status');

    if (status === 404) {
        console.log("error 404")
        return (
            <Card>
                <h1>ERROR 404</h1>
                <p>page not found</p>
            </Card>

        )
        // return (<Navigate to='notfound'/>);
    }

    function clickHandler() {
        console.log("helo from POST");
        // return (<Navigate to='/' />)
        navigate_var('/about');
        // <Link to="/about">Click</Link> // here in this situation, using navigate_var will be better
    }


    return (
        <div>
            <h1>POST</h1>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

Post.defaultProps ={
    status : 200,
}

Post.propTypes = {
    status : PropTypes.number,
}

export default Post
