import React from "react";
import Book from "./book";

function Library(props){
    return (
        <div>
            <Book name="처음 만난 파이썬" numOfPage={300}></Book>

            <Book name="처음 만난 자바" numOfPage={400}></Book>

            <Book name="처음 만난 리엑트" numOfPage={400}></Book>
        </div>
    )

}

export default Library