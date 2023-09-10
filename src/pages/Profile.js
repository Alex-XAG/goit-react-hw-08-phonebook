import { useSelector } from 'react-redux';
import { selectUser } from '../redux/auth/selectors';
import { Link } from 'react-router-dom';

export const Profile = () => {
  const user = useSelector(selectUser);
  const { name, email, avatar } = user;
  return (
    <>
      <h2>{name}</h2>
      <p>{email}</p>
      <img src={avatar} /> // ``
      <Link to="update">Update avatar</Link>
    </>
  );
};
