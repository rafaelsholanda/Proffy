import express from 'express';
import db from './database/connections';
import convertHourToMinutes from './utils/convertHourToMinutes';

const routes = express.Router();

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

routes.post("/classes", async (request, response) => {
  const {
    name,
    avatar,
    whatsapp,
    bio,
    subject,
    cost,
    schedule
  } = request.body;

  const trx = await db.transaction()

  try{
    const insertedUsersIds = await trx('users').insert({
      name,
      avatar,
      whatsapp,
      bio,
    });
  
    const user_id = insertedUsersIds[0];
  
    const inserteClassesIds = await trx('classes').insert({
      subject,
      cost,
      user_id
    });
  
    const class_id = inserteClassesIds[0];
  
    const classSchedule = schedule.map((scheduleItem: ScheduleItem) =>{
      return{
        week_day: scheduleItem.week_day,
        from: convertHourToMinutes(scheduleItem.from),
        to: convertHourToMinutes(scheduleItem.to),
        class_id
      }
    });
  
    await trx('class_schedule').insert(classSchedule);
  
    await trx.commit();
  
    return response.status(201).send();
  
  } catch (err) {
      
    await trx.rollback();
    
    return response.status(400).json({
      error: 'unexpected error while creating new class'
    });
  }
});

export default routes;