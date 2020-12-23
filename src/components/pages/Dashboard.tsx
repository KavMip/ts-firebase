import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setSuccess } from '../../store/actions/authActions';
import { RootState } from '../../store';

const Dashboard: FC = () => {
  const { user, success } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if(success) {
      dispatch(setSuccess(''));
    }
  }, [success, dispatch]);

  return(
    <section className="section">
      <div className="container">
        <h1 className="is-size-1">Welcome {user?.firstName}</h1>
      </div>
    </section>
  );
}

export default Dashboard;