import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Comments } from "./Comments";
import { Skills } from "./Skills";

@Entity("skills_comments")
export class Skills_Comments {
  @PrimaryColumn()
  skill_id: string;

  @ManyToOne(() => Skills)
  @JoinColumn({ name: "skill_id" })
  skills: Skills;

  @Column()
  comments_id: string;

  @ManyToOne(() => Comments)
  @JoinColumn({ name: "comments_id" })
  comments: Comments;

  @CreateDateColumn()
  created_at: Date;
}
