'use strict';

const db = require("../config/db")

class Question{
  static CreateTable(){
    const sql = `CREATE TABLE questions (
      id INTEGER PRIMARY KEY,
      CONTENT text
    )`
  }

}


module.exports = Question;
