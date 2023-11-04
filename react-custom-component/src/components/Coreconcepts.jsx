import { CORE_CONCEPTS } from "../data.js";
import Coreconcept from './Coreconcept.jsx'
export default function Coreconcepts() {
  return (
    <section id="core-concepts">
      <h2>Time to get started!</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <Coreconcept key={conceptItem.title} {...conceptItem} />
        ))}
        {/* <CoreConcepts
        title={CORE_CONCEPTS[0].title}
        description={CORE_CONCEPTS[0].description}
        image={CORE_CONCEPTS[0].image}
      />
     
      { <CoreConcepts
        title={CORE_CONCEPTS[1].title}
        description={CORE_CONCEPTS[1].description}
        image={CORE_CONCEPTS[1].image}
      /> } */}
        {/* <CoreConcepts {...CORE_CONCEPTS[0]} />
      <CoreConcepts {...CORE_CONCEPTS[1]} />
      <CoreConcepts {...CORE_CONCEPTS[2]} />
      <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
        {/* <CoreConcepts
        title={CORE_CONCEPTS[2].title}
        description={CORE_CONCEPTS[2].description}  
        image={CORE_CONCEPTS[2].image}
      /> */}
        {/* <CoreConcepts
        title={CORE_CONCEPTS[3].title}
        description={CORE_CONCEPTS[3].description}
        image={CORE_CONCEPTS[3].image}
      /> */}
      </ul>
    </section>
  );
}
