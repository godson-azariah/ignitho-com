import Image from "next/image";
import Icon from "@/components/ui/Icon";

/**
 * The orbiting Specialist POD stage. Geometry and the 40s rotation live in
 * `.podo` in globals.css, transcribed from the original's inline stylesheet;
 * this component only supplies the seats. Five faces sit on p1..p5 and the
 * teal AI node takes p6, matching the original's seating.
 */
export default function PodDiagram({ personas, centre }) {
  return (
    <div className="podo">
      <div className="ring r1" />
      <div className="ring r2" />
      <div className="glow" />

      <div className="core">
        <Icon name="pod" className="h-[36px] w-[36px]" />
        <b>{centre.title}</b>
        <small>{centre.subtitle}</small>
      </div>

      <div className="orbit">
        {personas.map((src, i) => (
          <div key={src} className={`node p${i + 1}`}>
            <Image src={src} alt="" width={128} height={128} sizes="64px" />
          </div>
        ))}
        <div className="node ai p6">
          <Icon name="star" className="h-[28px] w-[28px]" />
        </div>
      </div>
    </div>
  );
}
