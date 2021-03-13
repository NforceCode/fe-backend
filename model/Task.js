const db = new Map()

class Task {

  static createTask = async ({ body, isDone }) => {
    const createdTask = new Task();
    createdTask.body = body;
    createdTask.isDone = isDone;
    createdTask.id = `${db.size + 1}`;

    db.set(createdTask.id, createdTask);

    return Promise.resolve(createdTask);
  }

  static getTasks = async () => {
    return [...db.values()];
  }

  static getTask = async (id) => {
    if(db.has(id)) {
      return db.get(id);
    } else {
      throw new Error('No such task exists')
    }
  }

  static update = async (id, updateData) => {
    try{
      const { body, isDone } = updateData;
      const updatingTask = db.get(id);
      updatingTask.body = body;
      updatingTask.isDone = isDone;

      return Promise.resolve(updatingTask);

    } catch (error) {
      throw new Error(`Cant update id ${id}`);
    }
  }

  static delete = async (id) => {
    if(db.has(id)) {
      db.delete(id);
    } else {
      throw new Error('No such task exists')
    }
  }
}

module.exports = Task;
