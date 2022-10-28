import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { join } from 'path';

dotenv.config();

const source = new DataSource({
	type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'tareitas',
	dropSchema: false,
	synchronize: true,
	entities: [join(__dirname, '**', '**', '*.entity.{ts,js}')],
	migrations: [join(__dirname, 'database', 'migrations', '*.{ts,js}')],
});
export default source;