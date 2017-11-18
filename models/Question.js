'use strict';

const db = require("../config/db")

class Question{
      static CreateTable(){
        return new Promise(funcion(resolve){
          resolve(const sql = `CREATE TABLE questions (
          id INTEGER PRIMARY KEY,
          CONTENT text
        )`)
      }
    }
  }

module.exports = Question;
