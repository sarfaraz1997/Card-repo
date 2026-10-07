import "./ProfileCard.css";

function ProfileCard() {
  return (
    <div className="profile-card">
      <img
        src="https://i.pravatar.cc/150?img=12"
        alt="Profile"
        className="profile-image"
      />

      <h2>Sarfaraz Mahar</h2>
      <p className="role">Frontend Developer</p>

      <p className="description">
        I am a passionate web developer who loves creating modern
        and responsive websites using React and CSS.
      </p>

      <div className="profile-info">
        <div>
          <strong>12</strong>
          <span>Projects</span>
        </div>

        <div>
          <strong>850</strong>
          <span>Followers</span>
        </div>

        <div>
          <strong>25</strong>
          <span>Following</span>
        </div>
      </div>

      <button className="profile-btn">View Profile</button>
    </div>
  );
}

export default ProfileCard;