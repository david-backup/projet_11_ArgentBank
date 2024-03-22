import Navigation from "../components/Navigation";
import UserFormName from "../components/UserFormName";
import UserAccountInfos from "../components/userAccountInfos";

const UserEditName = () => {
  return (
    <>
      <Navigation />
      <main className="main bg-dark">
        <UserFormName />
        <UserAccountInfos />
      </main>
    </>
  );
};

export default UserEditName;