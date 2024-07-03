import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.mainCard}>
      <div className={s.aboutUser}>
        <img src={image} alt="User avatar" className={s.avatar} />
        <p className={s.name}> {name} </p>
        <p className={s.aboutPerson}> @{tag} </p>
        <p className={s.aboutPerson}> {location} </p>
      </div>

      <ul className={s.info}>
        <li className={s.infoItem}>
          <span>Followers</span>
          <span className={s.count}> {stats.followers}</span>
        </li>
        <li className={s.infoItem}>
          <span>Views</span>
          <span className={s.count}> {stats.views} </span>
        </li>
        <li className={s.infoItem}>
          <span>Likes</span>
          <span className={s.count}> {stats.likes} </span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
