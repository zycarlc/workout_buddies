require('dotenv').config()

const multer = require("multer")
const cloudinary = require("cloudinary").v2

const { CloudinaryStorage } = require("multer-storage-cloudinary")

cloudinary.config()

const upload = multer({
	storage: new CloudinaryStorage({
		cloudinary: cloudinary,
		params: {
			folder: "cloudinary-tutorial",
		},
	}),
})

module.exports = upload