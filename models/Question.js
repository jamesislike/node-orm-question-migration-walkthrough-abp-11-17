'use strict';

const db = require("../config/db")

class Question{
      static CreateTable(){
        return new Promise(funcion(resolve){
          const sql = `CREATE TABLE questions (
          id INTEGER PRIMARY KEY,
          CONTENT text
        )`
        
        db.Run(sql, function(){
          resolve("questions table created")
        })
      })
    }
  }

module.exports = Question;
