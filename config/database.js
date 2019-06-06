import mongoose from "mongoose";
import config from "./db_key";


/**
 * 'test' database connection
 */

const connection1 = mongoose.createConnection(config.DB);
connection1.then(
  () => {
    console.log("Mongoose CONNECTED to TEST database: Codelingo MongoDB");
  },
  err => {
    console.log(
      "Mongoose FAILED to connected to TEST database: Codelingo MongoDB"
    );
  }
);

/**
 * 'python' database connection
 */
var connection2 = mongoose.createConnection(config.DB1);
connection2.then(
  () => {
    console.log("Mongoose CONNECTED to PYTHON database: Codelingo MongoDB");
  },
  err => {
    console.log(
      "Mongoose FAILED to connected to PYTHON database: Codelingo MongoDB"
    );
  }
);

/**
 * 'python_questions' database connection
 */
var connection3 = mongoose.createConnection(config.DB2);
connection3.then(
  () => {
    console.log(
      "Mongoose CONNECTED to PYTHON_QUESTIONS database: Codelingo MongoDB"
    );
  },
  err => {
    console.log(
      "Mongoose FAILED to connected to PYTHON_QUESTIONS database: Codelingo MongoDB"
    );
  }
);

// export the connections

export { connection1, connection2, connection3 };
