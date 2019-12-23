import { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { signOutStartAsync } from "../../redux/user/user.action";
import { useDispatch } from "react-redux";

const userProfileDropdown = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <NavDropdown
      // title={<img width="40px" src={user.photoURL} />}
      title={
        <img
          width="40px"
          src="https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg"
        />
      }
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      show={isOpen}
      alignRight
    >
      <NavDropdown.Item>Hello {user.name}</NavDropdown.Item>
      <NavDropdown.Item
        className="bg-light"
        onClick={() => dispatch(signOutStartAsync())}
      >
        登出
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default userProfileDropdown;
