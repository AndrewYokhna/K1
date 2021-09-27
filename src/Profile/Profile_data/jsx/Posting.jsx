import React from "react";
import p from "../css/Posting.module.css";

const Posting = () => {
    return <div className={p.item + ' ' + p.postsblock}>
        <div>
            <h3>My posts</h3>

        </div>
        <div>
            <div>
                <textarea> </textarea>
                <button>Post</button>
            </div>
        </div>
    </div>
}
export default Posting;