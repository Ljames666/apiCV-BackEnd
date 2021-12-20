import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Files } from "./Files";
import { Projects } from "./Projects";

@Entity("projects_files")
export class Projects_Files {
  @PrimaryColumn()
  project_id: string;

  @ManyToOne(() => Projects)
  @JoinColumn({ name: "project_id" })
  projects: Projects;

  @Column()
  file_id: string;

  @ManyToOne(() => Files)
  @JoinColumn({ name: "file_id" })
  files: Files;

  @CreateDateColumn()
  created_at: Date;
}
