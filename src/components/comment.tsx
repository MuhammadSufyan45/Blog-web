"use client";

import { FormEvent, useState } from "react";

interface Comment{
    name : string,
    comment : string
}

export default function Comment(){

    const [name, setName] = useState<string>("");
    const [comment, setComment] = useState<string>("");
    const [comments, setComments] = useState<Comment[]>([]);

    const Handlesubmit = (e:FormEvent) => {
        e.preventDefault();
        if(name.trim() && comment.trim()){
            const newcomment = { name , comment };
            setComments([newcomment , ...comments]);
            setName("");
            setComment("");
        }else{
            alert('Please enter both a name and a comment')
        }
    }

    return (
       <div className="max-w-3xl sm:mx-auto mt-4 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Add a Comment</h1>
      <form onSubmit={Handlesubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg font-medium">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="comment" className="block text-lg font-medium">Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Your comment"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button 
          type="submit" 
          className="w-full py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
          Submit
        </button>
      </form>
      <div>
      <h2 className="text-2xl font-semibold mt-8">Comments:</h2>
      <div className="mt-4 p-4 bg-gray-200 rounded">
        {comments.length === 0 ? (
          <p className="text-gray-500">No comments yet.</p>
        ) : (
          comments.map((comment, index) => (
            <div key={index} className="border-b border-gray-400 py-4">
              <strong className="text-xl">{comment.name}</strong>
              <p className="mt-2 text-gray-700">{comment.comment}</p>
            </div>
          ))
        )}
      </div>
      </div>
    </div>
    )
}