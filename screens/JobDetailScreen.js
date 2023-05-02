import React from "react";
import JobDetail from "../components/JobDetail";
import { useSelector } from "react-redux";

const JobDetailScreen = ({ route }) => {
  const { jobId } = route.params;

  const availablejobs = useSelector((state) => state.jobs.availablejobs);
  const selectedItem = availablejobs.find((job) => job.id === jobId);

  return <JobDetail selectedItem={selectedItem} isReview={false} />;
};

export default JobDetailScreen;
