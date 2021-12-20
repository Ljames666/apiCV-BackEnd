import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Files } from "./Files";
import { Skills } from "./Skills";

@Entity("skills_files")
export class Skills_Files {
  @PrimaryColumn()
  skill_id: string;

  @ManyToOne(() => Skills)
  @JoinColumn({ name: "skill_id" })
  skills: Skills;

  @Column()
  file_id: string;

  @ManyToOne(() => Files)
  @JoinColumn({ name: "file_id" })
  files: Files;

  @CreateDateColumn()
  created_at: Date;
}
