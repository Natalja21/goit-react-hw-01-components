import PropTypes from 'prop-types';
import css from './FriendList.module.css'
const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(friend => (
        <li className={css.item} key={friend.id}>
          <span className={
            friend.isOnline ? css.statusOnline : css.statusOffline
          }></span>
          <img src={friend.avatar} alt="user avatar"  width="48" className={css.avatar}/>
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
export default FriendList;
