import "reflect-metadata";
import express from "express";
import cors from "cors";

import { routerUsers } from "./features/routers/UsersRouters";
import { routerSkills } from "./features/routers/SkillsRouters";
import { routerSkill_Files } from "./features/routers/Skills_FilesRouters";
import { routerSkill_Comments } from "./features/routers/Skills_CommentsRouters";
import { routerProjects } from "./features/routers/ProjectsRouters";
import { routerProject_Files } from "./features/routers/Projects_FilesRouters";
import { routerProject_Comments } from "./features/routers/Projects_CommentsRouters";
import { routerProfessional } from "./features/routers/ProfessionalExperiencesRouters";
import { routerPro_Comments } from "./features/routers/ProfessionalExperiences_CommentsRouters";
import { routerPro_Files } from "./features/routers/ProfessionalExperiences_FilesRouters";
import { routerPhone } from "./features/routers/PhoneRouters";
import { routerAddress } from "./features/routers/AddressRouters";
import { routerLanguages } from "./features/routers/LanguagesRouters";
import { routerFiles } from "./features/routers/FilesRouters";
import { routerEmailAddress } from "./features/routers/EmailAddressRouters";
import { routerEducation_Files } from "./features/routers/EducationAndCertifications_FilesRouters";
import { routerEducation_Comments } from "./features/routers/EducationAndCertifications_CommentsRouters";
import { routerEducation } from "./features/routers/EducationAndCertificationsRouters";
import { routerContacts } from "./features/routers/ContactsRouters";
import { routerComments } from "./features/routers/CommentsRouters";
import { initConnection } from "./core/database/connection/Database";

const app = express();
const port = process.env.PORT || 8081;

app.use(express.json(), cors());

app.use(
  routerUsers,
  routerSkills,
  routerSkill_Files,
  routerSkill_Comments,
  routerProjects,
  routerProject_Files,
  routerProject_Comments,
  routerProfessional,
  routerPro_Comments,
  routerPro_Files,
  routerPhone,
  routerAddress,
  routerLanguages,
  routerFiles,
  routerEmailAddress,
  routerEducation_Files,
  routerEducation_Comments,
  routerEducation,
  routerContacts,
  routerComments
);

initConnection()
  .then(() => app.listen(port, () => console.log("server is running on select port")))
  .catch((error) => {
    console.log("Error at creating connection with database");
    console.log(error);
  });
