import {NotesCollection} from './Notes'
import React, { useRef } from 'react';

const ForegroundDiv = () => {
  const ref = useRef(null);
  let data = [
    {
      desc:"This is the first paragraph which is aslo writen by Mr. Dharm,endra Kumar Sharma",
      fileSize: "2mb",
      close: false,
      tag:{isOpen: true, tagTitle:"Download Now", tagColor:"green"},
    },  
    {
      desc:"This is the first paragraph which is aslo writen by Mr. Dharm,endra Kumar Sharma",
      fileSize: "9mb",
      close: true,
      tag:{isOpen: false, tagTitle:"Download Now", tagColor:"green"},
    },  
    {
      desc:"This is the first paragraph which is aslo writen by Mr. Dharm,endra Kumar Sharma",
      fileSize: "18mb",
      close: false,
      tag:{isOpen: true, tagTitle:"Download Now", tagColor:"blue"},
    },  
    {
      desc:"This is the first paragraph which is aslo writen by Mr. Dharm,endra Kumar Sharma",
      fileSize: "3mb",
      close: true,
      tag:{isOpen: false, tagTitle:"Download Now", tagColor:"green"},
    },  
    {
      desc:"This is the first paragraph which is aslo writen by Mr. Dharm,endra Kumar Sharma",
      fileSize: "9mb",
      close: false,
      tag:{isOpen: true, tagTitle:"Download Now", tagColor:"purple"},
    },  
    {
      desc:"This is the first paragraph which is aslo writen by Mr. Dharm,endra Kumar Sharma",
      fileSize: "9mb",
      close: true,
      tag:{isOpen: false, tagTitle:"Download Now", tagColor:"green"},
    },  
    {
      desc:"This is the first paragraph which is aslo writen by Mr. Dharm,endra Kumar Sharma",
      fileSize: "9mb",
      close: false,
      tag:{isOpen: true, tagTitle:"Download Now", tagColor:"black"},
    },  
  ]
  return (
    <>


      <div ref={ref} className="forGround container min-vh-100 min-vw-100 position-absolute fixed-top" style={{ background: 'rgb(0 0 0 / 9%)', textAlign: 'center', zIndex: '0' }}>
      <div className="backText min-vh-100 vh-100">
        <h1 className="text-success text-center">Documents</h1>
        <h1 className="position-absolute bottom-20 start-0 docsHeading">DOCs.</h1>
      </div>
      </div>
      <div className='notesContainer'>
      {data.map((items, index)=>(
<NotesCollection data ={items} reference={ref}></NotesCollection>
))}
      </div>
    </>
  );
};

export {ForegroundDiv};
