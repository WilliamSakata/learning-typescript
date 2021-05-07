import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  {name: 'William', email: 'williamsakata2@gmail.com'},
];

export default{
  async index(req: Request, res: Response){
    return res.json(users);
  },

  async create(req: Request, res: Response){
    const emailService = new EmailService();

    emailService.sendMail({
    to: { 
      name: 'William Sakata', 
      email: 'williamsakata2@gmail.com' 
    },
    message: {
      subject: 'Bem-vindo ao sistema',
      body: 'Welcome stranger' 
    }
    });

    return res.send();
  }
};