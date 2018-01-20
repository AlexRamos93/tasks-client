import Task from "../task.js";
import Template from "../templates/taskForm.js";

class TaskForm extends Task {
  constructor(body) {
    super();
    this.body = body;
  }
  render() {
    this.body.innerHTML = Template.render();
    this.body.querySelector("[data-name]").focus();
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
      const body = e.target.querySelector("[data-body]");
      const year = e.target.querySelector("[data-year]");
      const month = e.target.querySelector("[data-month]");
      const day = e.target.querySelector("[data-day]");
      const hour = e.target.querySelector("[data-hour]");
      const min = e.target.querySelector("[data-min]");
      const reHour = e.target.querySelector("[data-rehour]");
      const opts = {
        method: "POST",
        url: `${this.URL}/tasks`,
        json: true,
        headers: {
          authorization: localStorage.getItem("token")
        },
        body: {
          name: name.value,
          body: body.value,
          year: year.value,
          month: month.value,
          day: day.value,
          hour: hour.value,
          min: min.value,
          rehour: reHour.value
        }
      };
      this.request(opts, (err, resp, data) => {
        if (err || resp.status === 412) {
          this.emit("error");
        } else {
          this.emit("submit");
        }
      });
    });
  }
}

module.exports = TaskForm;
