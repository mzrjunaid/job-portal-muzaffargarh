class Jobs {
  constructor(
    id,
    jobTitle,
    imageUrl,
    jobCities,
    publishDate,
    lastDate,
    jobType,
    vacancies,
    education,
    ageLimit,
    gender,
    experience,
    domicile
  ) {
    this.id = id;
    this.jobTitle = jobTitle;
    this.imageUrl = imageUrl;
    this.jobCities = jobCities;
    this.publishDate = publishDate;
    this.lastDate = lastDate;
    this.jobType = jobType;
    this.vacancies = vacancies;
    this.education = education;
    this.ageLimit = ageLimit;
    this.gender = gender;
    this.experience = experience;
    this.domicile = domicile;
  }
}

export default Jobs;
