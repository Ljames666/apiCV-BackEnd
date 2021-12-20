import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Files } from "./Files";
import { ProfessionalExperiences } from "./ProfessionalExperiences";

@Entity("professionalExperiences_files")
export class ProfessionalExperiences_Files {
  @PrimaryColumn()
  proEx_id: string;

  @ManyToOne(() => ProfessionalExperiences)
  @JoinColumn({ name: "proEx_id" })
  professionalExperiences: ProfessionalExperiences;

  @Column()
  file_id: string;

  @ManyToOne(() => Files)
  @JoinColumn({ name: "file_id" })
  files: Files;

  @CreateDateColumn()
  created_at: Date;
}
