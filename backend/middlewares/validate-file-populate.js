const multer = require("multer");

const MIME_TYPE_MAP = {
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
    "text/csv": "csv",
    //Photos Myme Types
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg",
    //Esquemas Myme Types
    "text/yaml": "yaml",
    "application/json": "json",
};

const MIME_TYPE_MAP_PICS = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg"
};

const MIME_TYPE_MAP_ESQUEMAS = {
    "text/yaml": "yaml",
    "application/json": "json",
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file) {
            var extension = file.originalname.split('.').pop().toLowerCase();
            const validExtension = Object.values(MIME_TYPE_MAP).includes(extension);

            let error = new Error("Invalid mime type");
            if (extension === MIME_TYPE_MAP[file.mimetype]) {
                error = null;
            } else if (validExtension) {
                file.mimetype = Object.keys(MIME_TYPE_MAP).find(key => MIME_TYPE_MAP[key] === extension);
                error = null;
            }

            let path = "";
            if (extension === MIME_TYPE_MAP_PICS[file.mimetype] || Object.values(MIME_TYPE_MAP_PICS).includes(extension)) {
                path = "backend/uploads/users"
            } else if (extension === MIME_TYPE_MAP_ESQUEMAS[file.mimetype] || Object.values(MIME_TYPE_MAP_ESQUEMAS).includes(extension)) {
                path = "backend/uploads/esquemas"
            } else {
                path = "backend/uploads/datafiles"
            }
            cb(error, path);
        }
    },
    filename: (req, file, cb) => {
        if (file) {
            // var split = file.originalname.split('.');
            // var extension = file.originalname.split('.').pop().toLowerCase();
            // const name = split[0]
            //     .toLowerCase()
            //     .split(" ")
            //     .join("_");
            // const ext = MIME_TYPE_MAP[file.mimetype] || extension;
            // cb(null, name + "-" + Date.now() + "." + ext);
            cb(null, file.originalname);
        }
    }
});

module.exports = multer({ storage: storage }).single("file");