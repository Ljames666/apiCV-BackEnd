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
import { Skills_Files } from "./Skills_Files";
import { Users } from "./Users";

@Entity("skills")
export class Skills {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  user_id: string;

  @ManyToOne(() => Users)
  @JoinColumn({ name: "user_id" })
  users: Users;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Skills_Files, (skills) => skills.skill_id)
  files: Skills_Files[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
