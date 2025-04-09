import { ways } from "../data";
import { WayToTeach } from "./WayToTeach";
export default function TeachingSection() {
  return (
    <section>
      <h3>Our educational Methods</h3>
      <ul>
        {ways.map((way) => {
          return <WayToTeach key={way.title} {...way} />;
        })}
      </ul>
    </section>
  );
}
