function ProjectCard({ judul, deskripsi, teknologi, githubUrl, imageUrl, nomor }) {
  return (
    <article className="project-card">
      <div className="project-card__visual">
        <img
          className="project-card__image"
          src={imageUrl}
          alt={`Pratinjau ${judul}`}
        />
        <span className="project-card__number">
          PROYEK {String(nomor).padStart(2, "0")}
        </span>
      </div>

      <div className="project-card__content">
        <h3 className="project-card__title">{judul}</h3>
        <p className="project-card__description">{deskripsi}</p>

        <ul className="project-card__tags" aria-label="Teknologi yang digunakan">
          {teknologi.map((tek) => (
            <li className="project-card__tag" key={tek}>
              #{tek.replace(/\s+/g, "")}
            </li>
          ))}
        </ul>

        {githubUrl ? (
          <a
            className="project-card__link"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Kunjungi profil GitHub almadhan30, terkait ${judul}`}
          >
            <span>Kunjungi profil GitHub</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="none"
              className="project-card__link-icon"
            >
              <path
                d="M5 15 15 5M6 5h9v9"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        ) : (
          <span className="project-card__link project-card__link--unavailable">
            Repositori belum tersedia
          </span>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
