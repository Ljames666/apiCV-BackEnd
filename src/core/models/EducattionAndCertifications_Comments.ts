import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Comments } from "./Comments";
import { EducationAndCertifications } from "./EducationAndCertifications";

@Entity("educationAndCertifications_comments")
export class EducationAndCertifications_Comments {
  @PrimaryColumn()
  educationCt_id: string;

  @ManyToOne(() => EducationAndCertifications)
  @JoinColumn({ name: "educationCt_id" })
  educationAndCertifications: EducationAndCertifications;

  @Column()
  comments_id: string;

  @ManyToOne(() => Comments)
  @JoinColumn({ name: "comments_id" })
  comments: Comments;

  @CreateDateColumn()
  created_at: Date;
}
