let params = new URLSearchParams(window.location.search);
let id = params.get("id");
let find = data.find((el) => el.id === id);
console.log(id);