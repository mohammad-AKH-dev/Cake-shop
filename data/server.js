const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./data/db.json'); // مسیر db.json نسبت به ریشه پروژه
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000; // پورت 4000

server.use(middlewares);
server.use('/api', router); // اختیاری: برای پیشوند API
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});