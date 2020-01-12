const todos = ['learn express', 'practice react', 'improve, improve, improve'];

const controller = {
  get: (req, res) => {
    res.status(200).send(todos);
  },

  post: (req, res) => {
    let { todo } = req.body;  //todo = req.body.todo
    todos.push(todo);
    res.status(201).send(`Posted todo '${todo}'`);
  },

  delete: (req, res) => {
    let { index } = req.params;   //index = req.params.index
    let deleted = todos.splice(index, 1);
    res.status(200).send(`Deleted todo ${deleted}`);
  }
};

module.exports = controller;