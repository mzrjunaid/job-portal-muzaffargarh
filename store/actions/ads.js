import { JOBS } from "../../data/dummyData";
import Jobs from "../../models/Jobs";

export const GET_AD = "GET_AD";
export const CREATE_AD = "CREATE_AD";
export const DELETE_AD = "DELETE_AD";
export const UPDATE_AD = "UPDATE_AD";

export const fetchAds = () => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;
    console.log(JOBS);
    try {
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const createAds = (
  id,
  title,
  imageUrl,
  jobPlace,
  publishDate,
  lastDate,
  jobType,
  vacancies,
  education,
  ageLimit,
  gender,
  experience,
  domicile
) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;

    dispatch({
      type: CREATE_AD,
      adData: {
        id: id,
        title: title,
        imageUrl: imageUrl,
        jobPlace: jobPlace,
        publishDate: publishDate,
        lastDate: lastDate,
        jobType: jobType,
        vacancies: vacancies,
        education: education,
        ageLimit: ageLimit,
        gender: gender,
        experience: experience,
        domicile: domicile,
      },
    });
  };
};
