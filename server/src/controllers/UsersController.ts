import { Request, Response } from 'express';

import db from '../database/connections';
import hashPassword from '../utils/hashPassword';

export default class UsersController{

  async create(request: Request, response: Response){
    const {
      name,
      surname,
      email,
      password,
      avatar,
    } = request.body;

    const existThisEmail = await db('users').select('users.email').where('email', String(email));

    if (!existThisEmail[0]) {

      const trx = await db.transaction();
 
      try {
        const userId = await trx('users').insert({
          name,
          surname,
          email,
          password: await hashPassword(password),
          avatar,
          whatsapp: '',
          bio: '',
        });
  
        await trx.commit();
        return response.status(201).json({
          user: userId[0]
        });
      
      } catch (err) {
  
        await trx.rollback();
        return response.status(400).json({
          error: 'unexpected error while creating new class'
        });
      }    
    } else {
      return response.status(400).json({
        alert: 'This email already exists on our database'
      });
    }
  }
}