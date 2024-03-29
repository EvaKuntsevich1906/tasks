const {
    pool
} = require("../db");

const createdEnvironmentDB = async (environment) => {
    const client = await pool.connect();
    const sql = `INSERT INTO  environment (label,category,priority)
    VALUES ($1, $2, $3) RETURNING environment.*`
    const arrOfVal = (await client.query(sql, [environment.label, environment.category, environment.priority]));
    return arrOfVal
}

const getAllEnvironmentDB = async () => {
    const client = await pool.connect();
    const sql = `SELECT * FROM environment`
    const arrOfVal = (await client.query(sql)).rows
    if (arrOfVal.length === 0) throw new Error("Not Found")
    return arrOfVal
}

const getAllEnvironmentByIDDB = async (id) => {
    const client = await pool.connect();

    const sql = `SELECT * FROM environment  WHERE id = $1`;
    const arrOfVal = (await client.query(sql, [id])).rows;

    if (arrOfVal.length === 0) throw new Error("Not Found")
    return arrOfVal
}
const updateEnvironmentByIDDB = async (id, label, category, priority) => {
    const client = await pool.connect();

    const sql = `UPDATE environment  SET label = $1, category = $2, priority = $3 WHERE id = $4 RETURNING environment .*`;
    const arrOfVal = (await client.query(sql, [label, category, priority, id]));

    if (arrOfVal.length === 0) throw new Error("Not Found")
    return arrOfVal
}
const patchEnvironmentByIDDB = async (id, obj) => {
    const client = await pool.connect();
    const select = `SELECT * FROM environment WHERE id = $1`
    const arrOfValue = (await client.query(select, [id])).rows[0];

    const newObj = {
        ...arrOfValue,
        ...obj
    }
    const sql = `UPDATE environment SET label = $1, category = $2, priority = $3 where id = $4 RETURNING environment .*`
    const foundData = (await client.query(sql, [newObj.label, newObj.category, newObj.priority, newObj.id])).rows
    return foundData;
}
const deletedEnvinronmentByIDDB = async (id) => {
    const client = await pool.connect();
    const sql = `DELETE FROM  environment WHERE  id = $1`
    const select = `SELECT * FROM environment`
    const arrOfVal = (await client.query(sql, [id]));
    const selectVal = (await client.query(select)).rows;
    return selectVal
}

module.exports = {
    createdEnvironmentDB,
    getAllEnvironmentDB,
    getAllEnvironmentByIDDB,
    updateEnvironmentByIDDB,
    patchEnvironmentByIDDB,
    deletedEnvinronmentByIDDB
}