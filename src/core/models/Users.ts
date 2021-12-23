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

  @OneToMany(() => Address, (address) => address.users)
  address: Address[];

  @OneToMany(() => EmailAddress, (email) => email.users)
  email: EmailAddress[];

  @OneToMany(() => Phone, (phone) => phone.users)
  phone: Phone[];

  @OneToMany(() => SocialNetworks, (socialNetworks) => socialNetworks.users)
  socialNetworks: SocialNetworks[];

  @OneToMany(() => EducationAndCertifications, (education) => education.users)
  educations: EducationAndCertifications[];

  @OneToMany(() => ProfessionalExperiences, (pro) => pro.users)
  professionalExperiences: ProfessionalExperiences[];

  @OneToMany(() => Projects, (project) => project.users)
  projects: Projects[];

  @OneToMany(() => Languages, (languages) => languages.users)
  languages: Languages[];

  @OneToMany(() => Skills, (skills) => skills.users)
  skills: Skills[];

  @OneToMany(() => Contacts, (contacts) => contacts.users)
  contacts: Contacts[];

  @OneToMany(() => Comments, (commit) => commit.users)
  comments: Comments[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
