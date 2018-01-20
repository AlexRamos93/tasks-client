import Task from "../task.js";
import Template from "../templates/signup.js";

class Signup extends Task {
  constructor(body) {
    super();
    this.body = body;
  }
  render() {
    this.body.innerHTML = Template.render();
    this.body.querySelector("[data-email]").focus();
    this.addEventListener();
  }
  addEventListener() {
    this.formSubmit();
  }
  formSubmit() {
    const form = this.body.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = e.target.querySelector("[data-name]");
      const email = e.target.querySelector("[data-email]");
      const password = e.target.querySelector("[data-password]");
      const number = e.target.querySelector("[data-number]");
      const opts = {
        method: "POST",
        url: `${this.URL}/users`,
        json: true,
        body: {
          name: name.value,
          email: email.value,
          password: password.value,
          number: number.value
        }
      };
      this.request(opts, (err, resp, data) => {
        if (err || resp.status === 412) {
          this.emit("error", err);
        } else {
          this.emit("signup");
        }
      });
    });
  }
}

module.exports = Signup;
