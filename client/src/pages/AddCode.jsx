import React from "react";


const AddCode = () => {
    return (
        
            <div className="centered">
                <h1 className="text-3xl font-bold mb-8">Add Code</h1>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">What is your name?</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
            </div>
    );
}

export default AddCode;