import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { EducationAndCertifications_Files } from "./EducationAndCertifications_Files";
import { Users } from "./Users";

@Entity("educationAndCertifications")
export class EducationAndCertifications {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  institute: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  description: string;

  @Column()
  Date: string;

  @Column()
  user_id: string;

  @ManyToOne(() => Users)
  @JoinColumn({ name: "user_id" })
  users: Users;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => EducationAndCertifications_Files, (education) => education.educationCt_id)
  files: EducationAndCertifications_Files[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
