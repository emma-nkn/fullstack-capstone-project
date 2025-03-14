// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    if (dbInstance){
        return dbInstance
    };

    const client = new MongoClient(url);      
    try {
        //Se connecter à MongoDB
        await client.connect();
        console.log("Connexion réussie à MongoDB");

        //Se connecter à la base de données giftDB et stocker dans dbInstance
        dbInstance = client.db(dbName);
        console.log(`Base de données sélectionnée : ${dbName}`);

        // Retourner l’instance de la base de données
        return dbInstance;
    } catch (error) {
        console.error("Erreur de connexion à MongoDB :", error);
        throw error;
    }

    // Task 1: Connect to MongoDB
    // {{insert code}}

    // Task 2: Connect to database giftDB and store in variable dbInstance
    //{{insert code}}

    // Task 3: Return database instance
    // {{insert code}}
}

module.exports = connectToDatabase;
