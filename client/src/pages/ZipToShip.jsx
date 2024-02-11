import React from 'react';


const ZipToShip = () => {
    return (
        <div className="centered">
            <h1 className="text-3xl font-bold mb-8">Zip To Ship</h1>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Zip Code</span>
                </div>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </label>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Weight</span>
                </div>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </label>
            <button className="btn btn-primary mt-4">Submit</button>
        </div>
    );
}

export default ZipToShip;

