import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Comments } from "./Comments";
import { ProfessionalExperiences } from "./ProfessionalExperiences";

@Entity("professionalExperiences_comments")
export class ProfessionalExperiences_Comments {
  @PrimaryColumn()
  proEx_id: string;

  @ManyToOne(() => ProfessionalExperiences)
  @JoinColumn({ name: "proEx_id" })
  professinalExperiences: ProfessionalExperiences;

  @Column()
  comments_id: string;

  @ManyToOne(() => Comments)
  @JoinColumn({ name: "comments_id" })
  comments: Comments;

  @CreateDateColumn()
  created_at: Date;
}
