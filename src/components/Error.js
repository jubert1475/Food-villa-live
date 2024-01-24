import { useRouteError   } from "react-router-dom"; //....This is hook provided by router Dom

const Error = () => {
  const err = useRouteError();
  const {status, statusText}=err;
  return (
    <>
      <h1>
        {status}
      </h1>
      <h2>{statusText}</h2>
    </>
  );
};

export default Error;
