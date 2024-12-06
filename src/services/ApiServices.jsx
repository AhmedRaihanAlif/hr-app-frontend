import axios from 'axios';
// import getCookieService from './GetCookieService';

const usersUrl = 'http://182.160.114.100:8081/';
// const usersUrl = 'http://localhost:8081/';

export const login = async (user) => {
  console.log(user);

  try {
    return await axios.post(`${usersUrl}auth/login`, user);
  } catch (err) {
    console.log(err.message);

    return err.message;
  }
};

export const getSubmittedByUser = async (loginToken) => {
  try {
    return await axios.get(`${usersUrl}api/jwt/users-view/byUsername`, {
      headers: {
        Authorization: `Bearer ${loginToken}`
      }
    });
  } catch (err) {
    console.log(err.message);

    return err.message;
  }
};

export const getEvaluationforAll = async (loginToken) => {
  try {
    return await axios.get(`${usersUrl}api/evaluations/all`, {
      headers: {
        Authorization: `Bearer ${loginToken}`
      }
    });
  } catch (err) {
    console.log(err.message);

    return err.message;
  }
};

export const addEvaluationForm = async (bodyInfo, loginToken) => {
  try {
    return await axios.post(`${usersUrl}api/jwt/evaluations/add`, bodyInfo, {
      headers: {
        Authorization: `Bearer ${loginToken}`
      }
    });
  } catch (err) {
    console.log(err.message);

    return err.message;
  }
};

export const signUpForm = async (bodyInfo) => {
  try {
    return await axios.post(`${usersUrl}auth/signup`, bodyInfo);
  } catch (err) {
    console.log(err.message);

    return err.message;
  }
};

// candidate services
export const addCandidateInfoService = async (bodyInfo) => {
  try {
    return await axios.post(`${usersUrl}api/candidates/add`, bodyInfo);
  } catch (err) {
    console.log(err.message);

    return err.message;
  }
};

export const addCandidateExperienceInfoService = async (bodyInfo) => {
  try {
    return await axios.post(`${usersUrl}api/experience/add`, bodyInfo);
  } catch (err) {
    console.log(err.message);

    return err.message;
  }
};

export const addCandidateFacilitiesInfoService = async (bodyInfo) => {
  try {
    return await axios.post(`${usersUrl}api/facilities/add`, bodyInfo);
  } catch (err) {
    console.log(err.message);

    return err.message;
  }
};

export const getCandidatesService = async () => {
  try {
    return await axios.get(`${usersUrl}api/candidates/all`);
  } catch (err) {
    console.log(err.message);

    return err.message;
  }
};

export const getCandidatesByDateService = async (interviewDate) => {
  try {
    return await axios.get(`${usersUrl}api/candidates/byDate?date=${encodeURIComponent(interviewDate)}`);
  } catch (err) {
    console.log(err.message);

    return err.message;
  }
};
