import renderToDOM from '../utils/renderToDom';

const form = () => {
  const domString = `<form id="sorting" class="d-flex flex-column form-floating ">
  <input
  type="text"
  class="form-control mb-1"
  id="student-name"
  placeholder="Enter a name"
  required
  />
  <label for="floatingInputValue">Name to be sorted</label>
  <button type="submit" class="btn btn-success">Get Sorted!</button>
  </form>`;

  renderToDOM('#form-container', domString);
};

export default form;
