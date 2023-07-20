import { Fragment } from "react";
const Blogcard = ({posts}) =>{
    const{title, body} = posts;
    return(
        <Fragment>
        <div className="blogcard-info">
            <h4 style={{color: 'blueviolet', fontSize: '15px'}}>POST: {title}</h4>
            <p>COMMENT: {body}</p>
        </div>
        </Fragment>
    )
};




export default Blogcard;