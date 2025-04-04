import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js'
import skillsRoute from './routes/skills.js'
import educationRoute from './routes/education.js'
import experienceRoute from './routes/experience.js'
import projectsRoute from './routes/project.js'
import usersRoute from './routes/user.js'
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to MONGO DB');
    } catch (error) {
        console.log(error);
    }
}

mongoose.connection.on("disconnected", () => {
    console.log('MONGO DB DISCONNECTED');
})

app.get('/', (req, res) => {
    res.send('Hello there!')
})

app.use(cors());
app.use(cookieParser());
app.use(express.json());

// ROUTES
app.use('/api/auth', authRoute);
app.use('/api/skills', skillsRoute);
app.use('/api/education', educationRoute);
app.use('/api/experience', experienceRoute);
app.use('/api/projects', projectsRoute);
app.use('/api/users', usersRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || 'Something went wrong';
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

app.listen(8800, () => {
    connect();
    console.log('connected to Backend!');
})