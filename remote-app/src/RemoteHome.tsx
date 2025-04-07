import { Link } from "react-router";

export const RemoteHome = () => {
  return (
    <>
      <h1>Remote Home</h1>
      <Link to={"/secondRemote"}>Second Remote</Link>
    </>
  );
};
