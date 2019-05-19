let app = require('./config/server');
let rotaHome = require('./app/routes/home');
let estudantes = require('./app/routes/estudantes');
let notas = require('./app/routes/notas');
let professores = require('./app/routes/professores');



rotaHome(app);
estudantes(app);
notas(app);
professores(app);








