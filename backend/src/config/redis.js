const { createClient }  = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
       host: 'redis-16334.c278.us-east-1-4.ec2.redns.redis-cloud.com',
        port: 16334 
    }   
});

module.exports = redisClient;