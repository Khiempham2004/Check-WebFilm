import express from 'express';
import mongoose from 'mongoose';
import dotenv, { config } from 'dotenv'
import morgan from 'morgan';
import bcrypt from 'bcrypt';
import movieModel from './model/movie.model.js';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import userModel from './model/users.model.js';
import imageModel from './model/image.model.js';


const app = express();
dotenv.config();
const Port = process.env.PORT || 3001;

app.use(express.json())
app.use(morgan("combined"))
// Login or Logout 
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) throw new Error("email or password is required")
        const handlePassword = await bcrypt.hash(email, password)

        // Tìm người dùng qua email (ràng buộc duy nhất)
        const loginPassword = await userModel.create(email, password)
        if (!loginPassword) {
            return res.status(401).send("email or password not Invalid")
        }

        const PasswordWatch = await bcrypt.compare(password, loginPassword.password);
        if (!handlePassword) {
            throw new Error("password not invalid!")
        }
        req.session.PasswordWatch = PasswordWatch;
        res.status(200).send("login successfully!")
    } catch (error) {
        console.log("error :>>", error);
        res.status(500).send(error)
    }
})
app.post("/logout", async (req, res) => {
    try {

        req.logout();

        req.clearCookie('accessToken')
        // const { email, password } = req.body;

        // if (!email || !password) throw new Error("email or password is required")

        res.status(201).send("Succesfully logged out!");
    } catch (error) {
        console.log("error :>>", error);
        res.status(500).send("logout successfully! ")
    }
})
// Them , sua , xoa du lieu phim
app.post("/movie", async (req, res) => {
    try {
        const { ID, name, time, year, image, introduce } = req.body;
        console.log(req.body);
        if (ID == '' || name == '' || time == '' || year == '' || image == '' || introduce == '') throw new Error(" All is required!");

        const movieSearch = await movieModel.create({
            ID,
            name,
            time,
            year,
            image,
            introduce
        })
        if (!movieSearch) throw new Error("search is required!")
        res.status(202).send(movieSearch)
    } catch (error) {
        console.log("error :>>", error);
        res.status(500).send("movie not default")
    }
})
app.put("/movie/:ID", async (req, res) => {
    try {
        const { ID } = req.params;
        const { name, time, year, image, introduce } = req.body;
        console.log(req.body);
        if (!ID || !name || !time || !year || !image || !introduce) throw new Error(" All is required!");

        const movieSearch = await movieModel.findByIdAndUpdate(req.params.ID,
            ID,
            {
                name,
                time,
                year,
                image,
                introduce
            },
            { new: true }
        )
        if (!movieSearch) throw new Error("search is required!")
        res.status(202).send(movieSearch)
    } catch (error) {
        console.log("error :>>", error);
        res.status(500).send("movie not default")
    }
})
app.patch("/movie/:ID", async (req, res) => {
    try {
        const { ID } = req.params;
        const { name, time, year, image, introduce } = req.body;
        console.log(req.body);
        if (!ID || !name || !time || !year || !image || !introduce) throw new Error(" All is required!");

        const movieSearch = await movieModel.findByIdAndDelete(req.params.ID,
            {
                name,
                time,
                year,
                image,
                introduce
            })
        if (!movieSearch) throw new Error("movie is patch required")
        res.status(202).send(movieSearch)
    } catch (error) {
        console.log("error :>>", error);
        res.status(500).send("movie not default")
    }
})

// Tim kiem danh sach phim + danh sach duoc sap xep theo nam
app.post("/movies", async (req, res) => {
    const { skip, limit } = req.body;
    const size = 5;
    try {
        const totalMovies = await movieModel.aggregate([
            { $match: { year: { $gt: 1 } } },
            { $count: "totalMovies" }
        ])
        // danh sach phim duoc xep theo nam
        const todoMovies = await movieModel.find({
            name: {
                $gt: 10,
            }
        }).sort({ year: -1, name: 1, ID: -1 }).skip(0).limit(10)

        // Tim kiem phim theo ten phim
        const searchMovie = await movieModel.find({
            name: "Avengers: Endgame"
        })
        // const totalPage = Math.ceil(totalMovies[0].totalMovies / size)

        res.status(200).send({ todoMovies, searchMovie })
    } catch (error) {
        console.log("error :>> ", error);
        res.status(500).send("search not defautl!")
    }
})


// Upload hinh anh len he thong 
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET,
});

const upload = multer({
    dest: './uploads', // Specify a dedicated upload directory
    limits: { fileSize: 5000000 }, // Set a maximum file size limit (5MB)
    fileFilter: (req, file, cb) => {
        const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
        const extname = path.extname(file.originalname);
        if (!allowedExtensions.includes(extname)) {
            cb(new Error('Invalid file type. Only JPEG, PNG, and GIF files are allowed.'));
            return;
        }
        cb(null, true); // Accept the file
    }
});

app.post("/image", upload.array("files"), async (req, res) => {
    try {
        const files = req.files;
        if (!files || files.length === 0) {
            return res.status(400).send("không có tệp nào tải lên")
        }
        res.json({
            code: 200,
            message: "đẩy file thành công lên tệp",
            data: files,
        })
    } catch (error) {
        res.json({
            code: 404,
            message: "success"
        })
    }
})

app.post("/image", upload.array("files"), async (req, res) => {
    try {
        const files = req.files;
        if (!files || files.length === 0) {
            return res.status(400).send("không có tệp nào tải lên")
        }
        res.json({
            code: 200,
            message: "đẩy file thành công lên tệp",
            data: files,
        })
    } catch (error) {
        res.json({
            code: 404,
            message: "success"
        })
    }
})

app.post("/upload", upload.single("file"), async (req, res) => {
    try {
        const file = req.file;

        if (!file) {
            return res.status(200).send({ error: "khongo có tệp tải lên" })
        }
        res.json({
            message: "tệp được tải lên thành công",
            data: file,
        })
        if (file.length > 2 || file.every((file) => file.size > 5 * 1024)) {
            res.status(400).send("too many people file or too large")
        }
        // const files = req.files; // updoad file single
        const imageUrls = [];
        for (const files of file) {
            const dataUrl = `data:${files.minetype}; base64 , ${files.buffer?.toString("base64")}`

            const fileName = file.originalname.split(',')[0];

            const result = await cloudinary.uploader.upload(dataUrl, {
                public_id: fileName,
            });

            imageUrls.push({ publicId: result.public_id, url: result.url })
        }

        const post = await imageModel.create({
            content: req.body.content,
            isPublic: req.body.isPublic,
            attachment: imageUrls,
            createAt: new Date().getTime(),
        });
        res.status(200).send(post);
    } catch (error) {
        res.json({
            code: 404,
            message: "success"
        })
    }
})

mongoose
    .connect('mongodb://127.0.0.1:27017/BackEnd')
    .then((app.listen(Port, () => {
        console.log(`localhost is running ${Port}`);
    }))
    );