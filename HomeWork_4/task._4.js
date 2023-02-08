function showUser(id) {
  if (id < 0) {
    throw new Error("ID must not be negative: " + id);
  }
  return { id: id };
}

function showUsers(ids) {
  let result = [];
  ids.forEach(function (id) {
    try {
      let person = showUser(id);
      result.push(person);
    } catch (exception) {
      console.log(exception.message);
    }
  });
  return result;
}
