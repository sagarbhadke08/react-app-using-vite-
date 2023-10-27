import './Coreconcepts.css';

function CoreConcepts({image, title , description}) {
    //we are using the concept of destructring here {}
    return (
      <li>
        <img src={image} alt={title} />
        <h3> {title}</h3>
        <p>{description}</p>
      </li>
    );
  }

  export default CoreConcepts;