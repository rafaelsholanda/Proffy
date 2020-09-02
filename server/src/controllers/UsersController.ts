import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import db from '../database/connections';


export default class UsersController{

  async index(request: Request, response: Response){
    return response.json();  
  }

  async create(request: Request, response: Response){
    const {
      name,
      surname,
      email,
      password,
      avatar,
    } = request.body;

    const saltRounds = 10;

    const trx = await db.transaction();

    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(password, salt, async function(err, hash) {
        try {

          const userId = await trx('users').insert({
            name,
            surname,
            email,
            password: hash,
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
      });
    });
  }
}