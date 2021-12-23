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
import { Projects_Files } from "./Projects_Files";
import { Users } from "./Users";

@Entity("projects")
export class Projects {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

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

  @OneToMany(() => Projects_Files, (projects) => projects.project_id)
  @JoinColumn()
  files: Projects_Files;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
