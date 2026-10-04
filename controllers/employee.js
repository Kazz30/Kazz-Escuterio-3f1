/*
    MIT License
    
    Copyright (c) 2025 Christian I. Cabrera || XianFire Framework
    Mindoro State University - Philippines

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    */
import { Employee, sequelize } from "../models/Employee.js";
await sequelize.sync();
const employee ={
  index: async (req, res) => {
    res.send("Index Page");
  },
 insert: async(req, res) =>{
      const {FirstName,
        LastName,
        MiddleName,
        Birthday,
        Age}=req.body
      const e=await Employee.create({FirstName,
        LastName,
        MiddleName,
        Birthday,
        Age
        });
      res.status(201).json({
        "status":"Done",
        "Data": e
        })
      
    },
    all: async (req, res) =>
    {
      const Employeedata = await Employee.findAll();
      res.json({
        "data":Employeedata
      })
    },
    find: async (req, res)=>{
      const id = req.params.id;
      const Employeeinf = await Employee.findByPk(id);
      res.json({
        "data":Employeeinf
      });
    },

};
export { employee };