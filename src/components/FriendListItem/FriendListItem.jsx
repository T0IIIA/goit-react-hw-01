import clsx from "clsx";
import s from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} className={s.avatar} alt="Avatar" width="48" />
      <p className={s.name}> {name} </p>
      <p className={clsx( s.status, s.offline, isOnline && s.online )}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
