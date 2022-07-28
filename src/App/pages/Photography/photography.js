import './photography.scss';
import photos from '../../../assets/Photography';

function Photography() {
  
  return (

    <div className="Photography">
      <div className="Header">
        <div className="Text">
          <h2>Gallery</h2>
          {/* I took my first photo in 2009—and I haven't stopped since.  */}
          <p>
            My gallery is an representation of my creative soul, and I believe this creative soul drives me to continue exploring new development ideas. The gallery gives me the space to showcase the roots of my creative talents. This is also professional, as I take lots of inspiration from the colors and layouts of my photography to my personal projects.
          </p>
          <p>
            As a frontend developer, I believe it is critical for me to carry my artistic touch to development, even if required to follow the designs of a professional UI/UX designer. There are certain gaps the frontend developer needs to fill, and those gaps may sometimes require an artistic mind.
          </p>
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
