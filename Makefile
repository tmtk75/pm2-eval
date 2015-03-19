start:
	pm2 start server.js --name server -i max

del: delete
delete:
	pm2 delete server
