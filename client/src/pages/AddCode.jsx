import React from "react";


const AddCode = () => {
    return (

        <div className="centered">
            <h1 className="text-3xl font-bold mb-8">Add Code</h1>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Category</span>
                </div>
                <select className="select select-bordered">
                    <option disabled selected>Pick one</option>
                    <option>Copper</option>
                    <option>Galvanized</option>
                    <option>Iron Pipe</option>
                    <option>PVC Schedule 40</option>
                    <option>PVC Schedule 80</option>
                </select>
            </label>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Item</span>
                </div>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </label>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Code</span>
                </div>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </label>
        </div>
    );
}

export default AddCode;