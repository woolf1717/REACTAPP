import React from "react";

import { useAppSelector } from "../../redux/reduxHooks/hooks";

function Profile() {
  const user = useAppSelector((state) => state.user.value);
  const themeColor = useAppSelector((state) => state.theme.value);

  return (
    <div style={{ color: themeColor }}>
      <h1>Profile Page</h1>
      <p>Name:{user.name}</p>
      <p>Age:{user.age}</p>
      <p>Email:{user.email}</p>
    </div>
  );
}

export default Profile;
