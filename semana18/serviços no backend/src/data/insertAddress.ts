import { connection } from '../index'
import { UserAddress } from '../types/userAddress'


export default async function insertAddress(address: UserAddress) {
    await connection.insert({
        id: address.id,
        street: address.street,
        number: address.number,
        neighborhood: address.neighborhood,
        complement: address.complement,
        city: address.city,
        state: address.state, 
        user_id: address.user_id
    }).into('Users_Address')
}
