import React from 'react'


const TitleOnPicture = () => {
  return (
    <>
    <h1>TitleOnPicture</h1>
    <div >
          <div className= 'polaroid-image-and-title'>
              <img src='https://www.doc.govt.nz/globalassets/images/places/northland/waipoua-forest/te-matua-ngahere-walk/walkway-1200.jpg' alt="description"/>

              <div className= 'polaroid-title-div'>
              <span className= 'polaroid-title' >TEXT ON IMAGE</span>
              </div>
          </div>
         </div> {/*end of each walk div*/}
     </>
  )
}


export default TitleOnPicture
