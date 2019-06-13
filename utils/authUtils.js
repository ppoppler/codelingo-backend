const jwt = require('jsonwebtoken');
const SECRET = 'sdf@kofdl4ko=cdf';

const getUserID = (context) => {
    const auth = context.request.get('Authorization');
    if(auth){
        const token = auth.replace('Bearer ', '');
        const {userId} = jwt.verify(token, APP_SECRET);
        return userId;
    }

    console.log('Not authenticated');
    
}

export {SECRET, getUserID};