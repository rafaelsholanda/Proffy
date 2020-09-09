import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import db from '../database/connections';

export default class UsersController{

  async create(request: Request, response: Response){
    const {
      name,
      surname,
      email,
      password,
      avatar,
    } = request.body;

    const emailExists = await db('users').select('users.email').where('email', String(email));

    if (!emailExists[0]) {

      const trx = await db.transaction();
 
      try {
        const userId = await trx('users').insert({
          name,
          surname,
          email,
          password: await bcrypt.hash(password, 8),
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
        alert: 'This email already exists on database'
      });
    };
  };

  async authenticate(request: Request, response: Response){
    const {email, password} = request.body;

    try {
      const user = await db('users').select('*').where('email', String(email));
            
      if (!user[0]) {
        return response.status(400).json({ Error:'User not found!' });
      };

      if (!(await bcrypt.compare(password, user[0].password))) {
        return response.status(400).json({ Error:'Invalid password!' });
      };

      const token = jwt.sign({id: user[0].id}, "secret", {expiresIn: 86400});

      return response.json({
        user: `${user[0].id}`,
        token: `${token}`
      });
    
    } catch (err) {
      console.log(err);
      return response.status(400).json({ Error:'Unable to Authenticate' });
    };
  };
};