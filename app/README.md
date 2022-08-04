Para rodar o projeto, você precisa ter o MySql instalado,
ou pode rodar o MySql pelo docker, é só digitar esse comando no terminal:
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=docker -d -p 3306:3306 mysql:5.7
Após isso entre na pasta app/back-end, entrando na pasta, digite npm start no terminal, 
espere alguns segundo até criar o banco e o servidor expor a porta 3001 do back-end,
e por fim, volte uma pasta e entre na pasta front-end e digite npm start, aguarde alguns segundos
e sua porta 3000 estará exposta para uso no browser, pronto!!
Agora é só aproveitar sua lista de tarefas, nela você pode vizualizar suas tarefas que estão
em progresso ou não, editar, excluír e até mesmo criar várias tarefas. 