import "reflect-metadata";
import express from "express";
import cors from "cors";
import { routerUsers } from "./features/routers/UsersRouters";
import { routerSkills } from "./features/routers/SkillsRouters";
import { routerSkill_Files } from "./features/routers/Skills_FilesRouters";
import { routerProjects } from "./features/routers/ProjectsRouters";
import { routerProject_Files } from "./features/routers/Projects_FilesRouters";
import { routerProfessional } from "./features/routers/ProfessionalExperiencesRouters";
import { routerPro_Files } from "./features/routers/ProfessionalExperiences_FilesRouters";
import { routerPhone } from "./features/routers/PhoneRouters";
import { routerAddress } from "./features/routers/AddressRouters";
import { routerLanguages } from "./features/routers/LanguagesRouters";
import { routerFiles } from "./features/routers/FilesRouters";
import { routerEmailAddress } from "./features/routers/EmailAddressRouters";
import { routerEducation_Files } from "./features/routers/EducationAndCertifications_FilesRouters";
import { routerEducation } from "./features/routers/EducationAndCertificationsRouters";
import { routerContacts } from "./features/routers/ContactsRouters";
import { routerComments } from "./features/routers/CommentsRouters";
import { initConnection } from "./core/database/connection/Database";
import { routerSocialNetworks } from "./features/routers/SocialNetworksRouters";
const app = express();
const port = process.env.PORT || 8081;

app.use(express.json(), cors());

app.use(
  routerUsers,
  routerSkills,
  routerSkill_Files,
  routerProjects,
  routerProject_Files,
  routerProfessional,
  routerPro_Files,
  routerPhone,
  routerAddress,
  routerLanguages,
  routerFiles,
  routerEmailAddress,
  routerEducation_Files,
  routerEducation,
  routerContacts,
  routerComments,
  routerSocialNetworks
);

initConnection()
  .then(() => app.listen(port, () => console.log("server is running on select port")))
  .catch((error) => {
    console.log("Error at creating connection with database");
    console.log(error);
  });
