 import React from "react";

 export default function Category({category:{id, title, image}}) {

    return(
        <React.Fragment>
            <a href="/" className="flex flex-col group items-center gap-y-2 text-center p-4 transition hover:bg-purple-50 rounded">
                <img src={image} alt={title} className="w-12 h-12 rounded border-rounded border-gray-200"/>
                <span className="text-sm font-semibold text-gray-700 whitespace-nowrap group-hover:text-brand-color tracking-tight">{title}</span>
            </a>
        </React.Fragment>
    )
     
 }