import * as sinon from "sinon";
import * as chai from "chai";
// @ts-ignore
import chaiHttp = require("chai-http");

import { app } from "../app";
import Task from "../database/models/Task";

chai.use(chaiHttp);

const { expect } = chai;

describe(" 1 - Testando get na rota /tasks", () => {
  const mockTask = [
    {
      id: 1,
      name: "Teste",
      description: "Teste",
      inProgress: false,
    },
  ];

  before(async () => {
    sinon.stub(Task, "findAll").resolves(mockTask as unknown as Task[]);
  });

  after(() => {
    (Task.findAll as sinon.SinonStub).restore();
  });

  it("1 - rota retorna as tarefas rota /tasks", async () => {
    const chaiHttpResponse = await chai.request(app).get("/tasks").send({});
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.eql(mockTask);
  });
});

describe(" 1 - Testando post na rota /tasks", () => {
  const mockTask = {
    name: "Teste",
    description: "Teste",
    inProgress: false,
  };

  before(async () => {
    sinon.stub(Task, "create").resolves(mockTask as unknown as Task);
  });

  after(() => {
    (Task.create as sinon.SinonStub).restore();
  });

  it("1 - rota retorna as tarefas rota /tasks", async () => {
    const chaiHttpResponse = await chai
      .request(app)
      .post("/tasks")
      .send(mockTask);
    expect(chaiHttpResponse.status).to.be.equal(201);
    expect(chaiHttpResponse.body).to.be.eql(mockTask);
  });
});

describe(" 1 - Testando put na rota /tasks", () => {
  const mockTask = {
    id: 1,
    name: "Teste",
    description: "Teste",
    inProgress: false,
  };

  before(async () => {
    sinon.stub(Task, "update").resolves(1 as unknown as any);
  });

  after(() => {
    (Task.update as sinon.SinonStub).restore();
  });

  it("1 - rota retorna as tarefas rota /tasks", async () => {
    const chaiHttpResponse = await chai
      .request(app)
      .put("/tasks/1")
      .send(mockTask);
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.eql(1);
  });
});

describe(" 1 - Testando delete na rota /tasks/:id", () => {
  before(async () => {
    sinon.stub(Task, "destroy").resolves(1 as unknown as number);
  });

  after(() => {
    (Task.destroy as sinon.SinonStub).restore();
  });

  it("1 - rota retorna as tarefas rota /tasks", async () => {
    const chaiHttpResponse = await chai.request(app).delete("/tasks/2").send();
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.eql(1);
  });
});
