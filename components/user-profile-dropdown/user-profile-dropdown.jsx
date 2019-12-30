import { signOutStartAsync } from "../../redux/user/user.action";
import { useDispatch } from "react-redux";
import { DropButton, List, Button } from "grommet";

const userProfileDropdown = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <DropButton
      dropAlign={{ top: "bottom", right: "right" }}
      dropContent={
        <List
          primaryKey="name"
          secondaryKey="percent"
          data={[
            { name: "Hi " + user.name },
            {
              name: (
                <Button onClick={() => dispatch(signOutStartAsync())}>
                  登出
                </Button>
              )
            }
          ]}
        />
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
