import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
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
  @JoinColumn()
  address: Address[];

  @OneToMany(() => EmailAddress, (email) => email.users)
  @JoinColumn()
  email: EmailAddress[];

  @OneToMany(() => Phone, (phone) => phone.users)
  @JoinColumn()
  phone: Phone[];

  @OneToMany(() => SocialNetworks, (socialNetworks) => socialNetworks.users)
  @JoinColumn()
  socialNetworks: SocialNetworks[];

  @OneToMany(() => EducationAndCertifications, (education) => education.users)
  @JoinColumn()
  educations: EducationAndCertifications[];

  @OneToMany(() => ProfessionalExperiences, (pro) => pro.users)
  @JoinColumn()
  professionalExperiences: ProfessionalExperiences[];

  @OneToMany(() => Projects, (project) => project.users)
  @JoinColumn()
  projects: Projects[];

  @OneToMany(() => Languages, (languages) => languages.users)
  @JoinColumn()
  languages: Languages[];

  @OneToMany(() => Skills, (skills) => skills.users)
  @JoinColumn()
  skills: Skills[];

  @OneToMany(() => Contacts, (contacts) => contacts.users)
  @JoinColumn()
  contacts: Contacts[];

  @OneToMany(() => Comments, (commit) => commit.users)
  @JoinColumn()
  comments: Comments[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
