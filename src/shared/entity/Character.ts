import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    DeepPartial,
} from 'typeorm';

import { User } from './User';

@Entity('Characters')
export class Character {
    static create(entity: DeepPartial<Character>): Character {
        const character = new Character();
        for (const key in entity) {
            character[key] = entity[key];
        }
        return character;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User, user => user.characters)
    user: Promise<User>;

    @Column()
    name: string;

    @Column('text')
    appearance: string;

    @Column('integer', { default: 0 })
    money: number;

    @Column('float', { default: 0 })
    x: number;

    @Column('float', { default: 0 })
    y: number;

    @Column('float', { default: 0 })
    z: number;

    @Column('float', { default: 0 })
    heading: number;

    @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
    lastPlayed: Date;
}