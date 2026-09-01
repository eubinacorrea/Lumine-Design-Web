import "./TeamMember.css";

function TeamMember({
  name,
  role,
  description,
  image
}) {
  return (
    <article className="team-member">
      <div className="team-member__image">
      {image}
      </div>

      <div className="team-member__content">
        <h3 className="team-member__name">
          {name}
        </h3>

        <p className="team-member__role">
          {role}
        </p>

        <p className="team-member__description">
          {description}
        </p>
      </div>
    </article>
  );
}

export default TeamMember;