import React from 'react'
import './MyBook.css'
import HTMLFlipBook from "react-pageflip";
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page1 from './components/Page1'
import Page4 from './components/Page4'
function MyBook(props) {
    return (
      <HTMLFlipBook className='book' width={400} height={600}>
        <div className="demoPage1"><Page1></Page1></div>
        <div className="demoPage2"><Page2></Page2></div>
        <div className="demoPage3"><Page3></Page3></div>
        <div className="demoPage4"><Page4></Page4></div>
      </HTMLFlipBook>
    );
  }
  export default MyBook;