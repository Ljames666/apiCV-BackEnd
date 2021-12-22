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
import { ProfessionalExperiences_Files } from "./ProfessionalExperiences_Files";
import { Users } from "./Users";

@Entity("professinalExperiences")
export class ProfessionalExperiences {
  @PrimaryColumn()
  id: string;

  @Column()
  company: string;

  @Column()
  position: string;

  @Column()
  description: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  Date: string;

  @Column()
  user_id: string;

  @ManyToOne(() => Users)
  @JoinColumn({ name: "user_id" })
  users: Users;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => ProfessionalExperiences_Files, (pro) => pro.proEx_id)
  files: ProfessionalExperiences_Files[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
