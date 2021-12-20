import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Comments } from "./Comments";
import { Projects } from "./Projects";

@Entity("Projects_comments")
export class Projects_Comments {
  @PrimaryColumn()
  project_id: string;

  @ManyToOne(() => Projects)
  @JoinColumn({ name: "project_id" })
  projects: Projects;

  @Column()
  comments_id: string;

  @ManyToOne(() => Comments)
  @JoinColumn({ name: "comments_id" })
  comments: Comments;

  @CreateDateColumn()
  created_at: Date;
}
