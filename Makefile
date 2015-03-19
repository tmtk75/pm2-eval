start:
	pm2 start server.js --name server -i max

burden:
	curl localhost:8080?burden=100

del: delete
delete:
	pm2 delete server
