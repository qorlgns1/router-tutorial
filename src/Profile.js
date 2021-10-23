import React from "react";

const data = {
  marco: {
    name: "배기훈",
    description: "리액트를 좋아하는 개발자",
  },
  gildong: {
    name: "홍길동",
    description: "홍길동전의 주인공",
  },
};

const Profile = (test) => {
  console.log("test", test);
  const match = test.match;
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})<p>{profile.description}</p>
      </h3>
    </div>
  );
};

export default Profile;
