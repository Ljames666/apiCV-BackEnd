import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Files } from "./Files";
import { EducationAndCertifications } from "./EducationAndCertifications";

@Entity("educationAndCertifications_files")
export class EducationAndCertifications_Files {
  @PrimaryColumn()
  educationCt_id: string;

  @ManyToOne(() => EducationAndCertifications)
  @JoinColumn({ name: "educationCt_id" })
  educationAndCertifications: EducationAndCertifications;

  @Column()
  file_id: string;

  @ManyToOne(() => Files)
  @JoinColumn({ name: "file_id" })
  files: Files;

  @CreateDateColumn()
  created_at: Date;
}
