module.exports = {
	port: 3001,
	host: 'localhost',
	session: {
		secret: 'myblog',
		key: 'myblog',
		maxAge: 2592000000
	},
	mongodb: 'mongodb://127.0.0.1:27017/daxiong'
};