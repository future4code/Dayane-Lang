import { connection } from '../index';
import { userTableName } from '../services/tablesDataBase';
import { users } from '../types/users';


 	export const insertUser = async ( user: users ) => {
		await connection
	    .insert({
	      id: user.id,
	      email: user.email,
	      password: user.password,
	    })
	    .into(userTableName);
	};


