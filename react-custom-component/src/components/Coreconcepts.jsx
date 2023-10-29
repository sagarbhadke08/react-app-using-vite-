import './Coreconcepts.css';

function CoreConcepts({image, title , description}) {
    //we are using the concept of destructring here {}

    // console.log('Coreconetps prop')
    return (
      <li>
        <img src={image} alt={title} />
        <h3> {title}</h3>
        <p>{description}</p>
      </li>
    );
  }

  export default CoreConcepts;