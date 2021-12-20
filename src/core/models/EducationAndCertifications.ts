import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Users } from "./Users";

@Entity("educationAndCertification")
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

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
