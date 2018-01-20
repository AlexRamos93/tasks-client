exports.render = () => {
    return `<form>
      <div class="list">
        <label class="item item-input item-stacked-label">
          <span class="input-label">Task Name</span>
          <input type="text" data-name>
        </label>
        <label class="item item-input item-stacked-label">
          <span class="input-label">Body</span>
          <input type="text" data-body>
        </label>
        <label class="item item-input item-stacked-label">
          <span class="input-label">Year</span>
          <input type="text" data-year>
        </label>
        <label class="item item-input item-stacked-label">
          <span class="input-label">Month</span>
          <input type="text" data-month>
        </label>
        <label class="item item-input item-stacked-label">
          <span class="input-label">Day</span>
          <input type="text" data-day>
        </label>
        <label class="item item-input item-stacked-label">
          <span class="input-label">Hour</span>
          <input type="text" data-hour>
        </label>
        <label class="item item-input item-stacked-label">
          <span class="input-label">Minute</span>
          <input type="text" data-min>
        </label>
        <label class="item item-input item-stacked-label">
          <span class="input-label">How many hours before you want to be reminded?</span>
          <input type="text" data-rehour>
        </label>
      </div>
      <div class="padding">
        <button class="button button-positive button-block">
          <i class="ion-compose"></i> Add
        </button>
      </div>
    </form>`;
  };
  