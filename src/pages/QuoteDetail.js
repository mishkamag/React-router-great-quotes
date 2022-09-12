import { Fragment } from "react";
import { useParams } from "react-router-dom";

const QuoTeDetail = () => {
  const params = useParams();
  return (
    <Fragment>
      <h1> Quote Detail Page</h1>
      <p>{params.qouteId}</p>
    </Fragment>
  );
};

export default QuoTeDetail;
