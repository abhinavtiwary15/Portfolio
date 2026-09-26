import profile from "@/config/profile";

/**
 * SeoContent — Hidden semantic HTML for search engines & AI crawlers.
 * 
 * Renders keyword-rich, structured text that search engines and AI bots can crawl.
 * Sourced dynamically from central profile configuration.
 */
export default function SeoContent() {
  return (
    <div
      className="sr-only"
      style={{
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        borderWidth: 0,
      }}
      aria-hidden="false"
      itemScope
      itemType="https://schema.org/Person"
    >
      <h1 itemProp="name">{`${profile.name} — ${profile.role}`}</h1>
      
      <p itemProp="description">
        {profile.seo.description}
      </p>

      <p itemProp="jobTitle">{profile.role}</p>

      <section aria-label="Professional Experience">
        <h2>Experience — {profile.name}</h2>
        {profile.experience.map((exp) => (
          <article key={exp.id}>
            <h3>{exp.role} at {exp.company}</h3>
            <p>{exp.period} | {exp.location}</p>
            <ul>
              {exp.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section aria-label="Featured Engineering Projects">
        <h2>Open Source Projects — {profile.name}</h2>
        {profile.projects.map((proj) => (
          <article key={proj.id}>
            <h3>{proj.name} ({proj.domain})</h3>
            <p>{proj.one_liner}</p>
            <p>{proj.description}</p>
            <p>Impact: {proj.quantifiable_impact}</p>
            <p>GitHub Repository: {proj.github_url}</p>
          </article>
        ))}
      </section>

      <section aria-label="Technical Skills">
        <h2>Technical Competencies</h2>
        <p itemProp="knowsAbout">
          {profile.seo.keywords.join(", ")}
        </p>
      </section>

      <section aria-label={`About ${profile.name}`}>
        <h2>{profile.name} – {profile.role}</h2>
        <p>{profile.shortBio}</p>
        {profile.bio.map((paragraph, idx) => (
          <p key={idx}>{paragraph.replace(/\*/g, "")}</p>
        ))}
      </section>

      <section aria-label="Contact">
        <h2>Contact Information</h2>
        <p>
          <span itemProp="url">{profile.siteUrl}</span> |
          <span itemProp="email">{profile.contact.email}</span>
        </p>
      </section>
    </div>
  );
}
