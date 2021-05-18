import './photography.scss';
import photos from '../../assets/Photography';

function Photography() {
  
  return (

    <div className="Photography">
      <div className="Header">
        <div className="Text">
          <h2>The Gallery</h2>
          <p>I took my first photo in 2009—I haven't stopped since. Here are some of my favorites throughout my years of experience.</p>
          {/* <p>See more on my VSCO!</p> */}
        </div>
      </div>

      {PhotoGallery()}

      {/* {ShowPhotos()}

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="grid"
        columnClassName="grid-column">
        {
          
        }
      </Masonry> */}

    </div>
  )
}

function PhotoGallery() {
  return (
    <div className="Photos">
      <div className="portrait">
        <img className="Angus" src={photos.Angus} draggable="false" alt="" />
      </div>
      <div className="portrait">
        <img className="Ian" src={photos.Ian} draggable="false" alt="" />
      </div>
      <div className="portrait">
        <img className="Stargazing" src={photos.Stargazing} draggable="false" alt="" />
      </div>
      <div className="portrait">
        <img src={photos.Gabby} draggable="false" alt="" />
      </div>
      <div className="landscape">
        <img src={photos.Lagunitas} draggable="false" alt="" />
      </div>
      <div className="landscape">
        <img src={photos.Bridge} draggable="false" alt="" />
      </div>
      <div className="portrait">
        <img src={photos.RedPurple} draggable="false" alt="" />
      </div>
      <div className="portrait">
        <img src={photos.FlowerBoy} draggable="false" alt="" />
      </div>
      <div className="landscape">
        <img src={photos.Silvertone} draggable="false" alt="" />
      </div>
      <div className="portrait">
        <img src={photos.JulianGeronimo} draggable="false" alt="" />
      </div>
      <div className="portrait">
        <img src={photos.KyuFlare} draggable="false" alt="" />
      </div>
      <div className="portrait">
        <img src={photos.Paolina} draggable="false" alt="" />
      </div>
      <div className="landscape">
        <img src={photos.Beach} draggable="false" alt="" />
      </div>
      <div className="portrait">
        <img src={photos.Foggy} draggable="false" alt="" />
      </div>
      <div className="portrait">
        <img src={photos.SamStars} draggable="false" alt="" />
      </div>
      <div className="portrait">
        <img className="Seoul" src={photos.Seoul} draggable="false" alt="" />
      </div>
      <div className="portrait">
        <img className="RedMotorcycles" src={photos.RedMotorcycles} draggable="false" alt="" />
      </div>
      <div className="landscape">
        <img src={photos.Sunset} draggable="false" alt="" />
      </div>
    </div>
  )
}

export default Photography
