import { signOutStartAsync } from "../../redux/user/user.action";
import { useDispatch } from "react-redux";
import { DropButton } from "grommet";

const userProfileDropdown = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <DropButton
      dropAlign={{ top: "bottom", right: "right" }}
      dropContent={
        <>
          <div>Hello {user.name}</div>
          <div onClick={() => dispatch(signOutStartAsync())}>登出</div>
        </>
      }
    >
      <img
        width="40px"
        src="https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg"
      />
    </DropButton>
  );
};

export default userProfileDropdown;
