
import './notes.css';
import { CiFileOn } from "react-icons/ci";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";


import { motion } from "framer-motion"

const NotesCollection =({data, reference})=>{
  return(
    <>
        <motion.div drag dragConstraints={reference} className="boxes">
<div className="boxesChildren">

<div className="imagePara">
<CiFileOn className="imagePara_file"></CiFileOn>
  <p>{data.desc}</p>
</div>

<div className="bottomPart">
<div className="download">
  <p className="download_size">{data.fileSize}</p>
  {data.close ?  <IoCloseSharp className="buttomPart_close"/> : <IoCloudDownloadOutline  className="buttomPart_close"/>}

  </div>
</div>
</div>
{data.tag.isOpen ? <div className='downloadNow' style={{background:data.tag.tagColor}}>
<p>{data.tag.tagTitle}</p>
</div>: <div className="preogressBar">
<progress value="70" max="100"></progress>
</div>}
</motion.div>
    </>
  )
}

export { NotesCollection }