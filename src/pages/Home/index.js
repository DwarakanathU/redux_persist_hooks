import React from "react";
import ButtonAtom from "../../components/common/ButtonAtom";
import { useDispatch } from "react-redux";
import { userSetDetails } from "../../redux/user/user.action";
const Home = () => {
  const dispatch = useDispatch();
  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(userSetDetails(null));
  };
  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome Home</h1>
        <ButtonAtom type="button" label="logout" handleClick={handleLogOut} />
      </div>
    </div>
  );
};

export default Home;
