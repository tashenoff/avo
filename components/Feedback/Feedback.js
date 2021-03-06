import React from "react";
import FeedbackStarList from "../FeedbackStars/FeedbackStarList";
import { Data } from "./Data";


const Feedback = ({ size }) => {
    return (
        <div class="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {Data.map((item, index) => {
                return (
                    <div className="bg-white text-gray-900 p-5 rounded-lg">
                        <div className="flex flex-row border border-white items-center">
                            <div className="bg-gray-300 w-12 h-12 rounded-full"></div>
                            <div className="flex flex-col ml-3">
                                <h5 className="pb-1">{item.name}</h5>
                                <div className="flex w-full">
                                    <div className="flex w-full"><FeedbackStarList size='sm' rating={item.stars} /></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col py-5">
                            <h5 className="pb-5">{item.title}</h5>
                            <p>{item.text}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Feedback;
