const oracledb = require('oracledb');

async function findAll() {
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: "lbd",
            password: "123",
            connectString: "localhost/XE"
        });

        const result = await connection.execute(
            `SELECT ID_ASISTENCIA, FECHA, ESTADO, ID_MATRICULA FROM ASISTENCIA`
        );

        return result.rows.map(r => ({
            ID_ASISTENCIA: r[0],
            FECHA: r[1] ? r[1].toISOString().split('T')[0] : null,
            ESTADO: r[2],
            ID_MATRICULA: r[3]
        }));
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        if (connection) await connection.close();
    }
}

module.exports = { findAll };
