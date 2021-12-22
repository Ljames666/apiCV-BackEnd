import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Address } from "./Address";
import { Comments } from "./Comments";
import { Contacts } from "./Contacts";
import { EducationAndCertifications } from "./EducationAndCertifications";
import { EmailAddress } from "./EmailAddress";
import { Languages } from "./Languages";
import { Phone } from "./Phone";
import { ProfessionalExperiences } from "./ProfessionalExperiences";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { SocialNetworks } from "./SocialNetworks";

@Entity("users")
export class Users {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  title: string;

  @Column()
  abstract: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Address, (address) => address.user_id)
  address: Address[];

  @OneToMany(() => EmailAddress, (email) => email.user_id)
  email: EmailAddress[];

  @OneToMany(() => Phone, (phone) => phone.user_id)
  phone: Phone[];

  @OneToMany(() => SocialNetworks, (socialNetworks) => socialNetworks.user_id)
  socialNetworks: SocialNetworks[];

  @OneToMany(() => EducationAndCertifications, (education) => education.user_id)
  educations: EducationAndCertifications[];

  @OneToMany(() => ProfessionalExperiences, (pro) => pro.user_id)
  professionalExperiences: ProfessionalExperiences[];

  @OneToMany(() => Projects, (project) => project.user_id)
  projects: Projects[];

  @OneToMany(() => Languages, (languages) => languages.user_id)
  languages: Languages[];

  @OneToMany(() => Skills, (skills) => skills.user_id)
  skills: Skills[];

  @OneToMany(() => Contacts, (contacts) => contacts.user_id)
  contacts: Contacts[];

  @OneToMany(() => Comments, (commit) => commit.user_id)
  comments: Comments[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
