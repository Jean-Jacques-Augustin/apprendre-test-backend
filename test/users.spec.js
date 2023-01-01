const { User } = require("../src/users");
const axios = require("axios");
const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

chai.use(sinonChai);

describe("Description initial : test de call api sans src/users", (done) => {
     const sandbox = sinon.createSandbox();
     let user;

     beforeEach(() => {
          user = new User("Jean-Jacques-Augustin");
     });

     afterEach(() => {
          sandbox.restore();
     });

     it("Retourner l'id de l'utilisateur, et verifier le type de cet id", () => {
          const user = new User("Jean-Jacques-Augustin");
          const stub = sandbox
               .stub(axios, "get")
               .returns(Promise.resolve({ data: { id: 58912882 } }));
          user.getUserId()
               .then((result) => {
                    expect(result).to.be.a("number");
                    expect(result).to.eq(58912882);
                    expect(stub).to.have.been.calledOnce;
                    expect(stub).to.have.been.calledWith("https://api.github.com/users/Jean-Jacques-Augustin");
                    done();
               })
               .catch((err) => {
                    done();
               });
     });

     it("Retourner le repos github de l'utilisateur", (done) => {
          const user = new User("Jean-Jacques-Augustin", true);


          const stub = sandbox
               .stub(axios, "get").resolves({ data: [{ name: "repo1" }, { name: "repo2" }] });
          sandbox.stub(user, "canViewRepos").value(true);

     
          user.getUserRepo(1)
               .then((result) => {
                    expect(result).to.be.a("object");
                    expect(result).to.have.property("name");
                    expect(result.name).to.eq("repo2");
                    expect(stub).to.have.been.calledOnce;
                    expect(stub).to.have.been.calledWith("https://api.github.com/users/Jean-Jacques-Augustin/repos");
                    done();
               }
               ).catch((err) => {
                    done();
               });
     });
          
     it("Retourner en vrai si l'utilisateur ne peut pas voir le repos", (done) => {
          const user = new User("Jean-Jacques-Augustin", false);
          const stub = sandbox.stub(axios, "get");
          sandbox.stub(user, "canViewRepos").value(false);

          user.getUserRepo(1)
          .catch((err) => {
               expect(err).to.eq("Cannot view repos");
               expect(stub).to.have.not.been.called;
               done();
          });
     });
});
