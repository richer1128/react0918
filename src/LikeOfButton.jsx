import PropTypes from 'prop-types;'
import { useState } from "react";

function LikeOfButton(props) {
// const defaultLiked = false;
// const defaultLikeCount = 7;

    const [liked, setLiked] = useState(props.liked);
    const [likeCount, setLikeCount] = useState(props.likeCount);

    const getButtonText = () => {
        if(liked) {
            return "Cancel Like"
        } else {
            return "Like it!"
        }
    }
    return (
        <div style= {{display:"flex", justifyContent:"center", gap:"20px", padding:"50px"}}>
            <button onClick={() => {
                setLiked(!liked);
                setLikeCount(liked ? likeCount -1 : likeCount + 1)
            }}>
                {getButtonText()}
            </button>
            <span>{likeCount}</span>
        </div>
    )
};
LikeOfButton.propTypes ={
    liked: PropTypes.bool,
    likeCount: PropTypes.number,
}

LikeOfButton.defaultProps = {
    liked: false,
    likeCount:0,
}

export default LikeOfButton;
