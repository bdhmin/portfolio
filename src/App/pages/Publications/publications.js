import "./publications.scss";
import { publications } from './publication-data';

export default function Publications() {
  return (
    <div className="publications">
      <div className="publications-content">
        <h2>Publications</h2>
        {
          publications.map(publication => (
            <PublicationItem {...publication}/>
          ))
        }
      </div>
    </div>
  )
}

function PublicationItem({title, subtitle, authors, venue, resources, thumbnail, award, note}) {
  return (
    <div className="publication-item">
      <div className="thumbnail">
        <img src={thumbnail} alt={`${title} ${subtitle}`} />
      </div>
      <div className="description">
        <div className="header">
          <p>{venue}</p>
          {award && <p className="award">{award}</p>}
          {note && <p className="note">{note}</p>}
        </div>
        <div className="content">
          <h5><strong>{title}</strong> {subtitle}</h5>
          <p>
            {authors.map((author, index) => (
              <>
                <span style={{fontWeight: author === 'Bryan Min' ? 800 : 400}}>{author}</span>
                {index < authors.length - 1 ? ', ' : null}
              </>
            ))}
        </p>
        </div>
        <div className="resources">
          {
            resources.length === 0 ?
            <p>Coming Soon</p> :
            resources.map(resource => (<a key={resource.type} style={{pointerEvents: ''}} href={resource.link}>{resource.type}</a>))
          }
        </div>
      </div>
    </div>
  )
}
