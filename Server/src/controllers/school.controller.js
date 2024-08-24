const connection = require('../config/db.js');

exports.addSchool = (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
    connection.query(query, [name, address, latitude, longitude], (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: err.message });
        }
        res.status(201).json({message:"School Added successfuly"});
    });
};


exports.listSchools = (req, res) => {
    const { latitude, longitude } = req.query;

    const query = 'SELECT id, name, address, latitude, longitude, ' +
        '((ACOS(SIN(? * PI() / 180) * SIN(latitude * PI() / 180) + COS(? * PI() / 180) * COS(latitude * PI() / 180) * COS((? - longitude) * PI() / 180)) * 180 / PI()) * 60 * 1.1515) AS distance ' +
        'FROM schools ' +
        'ORDER BY distance ASC';

    connection.query(query, [latitude, latitude, longitude], (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: err.message });
        }
        res.status(200).json(results);
    });
};
