import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({
  name: 'departmentss', 
  synchronize: false,
})
export class Department {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string
}