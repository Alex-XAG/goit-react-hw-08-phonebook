import { useState } from 'react';
// import hardSet from 'redux-persist/es/stateReconciler/hardSet';
import { updateAvatar } from '../redux/auth/operations';
import { useDispatch } from 'react-redux';

export const UpdateAvatar = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);

  const handleChange = evt => {
    setFile(evt.target.files[0]);
  };

  const handleUpload = () => {
    dispatch(updateAvatar(file));
  };

  return (
    <>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </>
  );
};
