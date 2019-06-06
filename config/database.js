import mongoose from 'mongoose';
import config from './db_key';

mongoose.connect(config.DB, {useNewUrlParser: true}).then(
    ()=> {console.log('Mongoose CONNECTED to TEST database: Codelingo MongoDB')},
    (err) => {console.log('Mongoose FAILED to connect to TEST database: Codelingo MongoDB')}
);

export default mongoose;