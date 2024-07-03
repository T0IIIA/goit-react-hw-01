import s from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends = [] }) => {
  return (
    <ul className={s.list}>
      {friends.map((obj) => {
        return (
          <li className={s.item} key={obj.id}>
            <FriendListItem
              avatar={obj.avatar}
              name={obj.name}
              isOnline={obj.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
