const path = require('path');
const fs = require('fs');

const { User, Datafile, Role } = require('../models');

// const cloudinary = require('cloudinary').v2
// cloudinary.config(process.env.CLOUDINARY_URL);

// const cargarArchivo = async(req, res) => {
//     try {
//         // txt, md
//         // const nombre = await subirArchivo( req.files, ['txt','md'], 'textos' );
//         const nombre = await subirArchivo(req.files, undefined, 'imgs');
//         res.json({ nombre });
//     } catch (msg) {
//         res.status(400).json({ msg });
//     }

// }

exports.updateFile = async(req, res) => {
    current_user_id = req.userData.userId;
    
    try {
        const entity = req.body.entity; 
        let model;
        let actualFilePath = "";
        if (req.file) { 
            const url = req.protocol + "://" + req.get("host")+"/"; 
            newFilePath = url + entity + "/" + req.file.filename; 
        } else {
            newFilePath = req.body.filePath;
        }
        
        if (current_user_id !== req.body.userId) {
            return res.status(403).json({
                msg: `You're not authorized to perform this action.`
            });
        }
        
        switch (entity) {
            case 'users':
                model = await User.findById(req.body.userId);
                if (!model) {
                    return res.status(400).json({
                        msg: `There is no user with id ${ id }`
                    });
                }
                if (model.photo) {
                    if (!model.photo.includes("assets")){
                        actualFilePath = model.photo.replace('http://localhost:3000','backend/uploads');
                    } else {
                        actualFilePath = model.photo;
                    }
                    model.photo = newFilePath;
                    await User.updateOne({ _id: req.body.userId}, model)
                    break;
                }
            
            case 'datafiles':
                model = await Datafile.findById(req.body.datafileId);
                if (!model) {
                    return res.status(404).json({
                        msg: `There is no datafile with id ${ id }`
                    });
                }
                roles = await Role.find({ workspace: model.workspace, user: current_user_id });
                if (roles.length !== 1) {
                    return res.status(403).json({
                        message: "The current user is not authorized to perform any actions on this workspace!"
                    });
                }
                let newContentPath = null;
                if (req.body.operation === 'updateFile' || req.body.operation === 'updateContent') {
                    newContentPath = "backend/uploads/datafiles/" + req.file.filename;
                }
                
                if (model.contentPath) {
                    actualFilePath = model.contentPath;
                }
                model.contentPath = newContentPath;
                await Datafile.updateOne({ _id: req.body.datafileId}, model)
                break;
                
            default:
                return res.status(500).json({ msg: 'There is no validation for this.' });
        }
        // Limpiar imágenes previas
        if (fs.existsSync(actualFilePath)) {
            fs.unlinkSync(actualFilePath);
        }    
        //await model.save();
        return res.status(200).json({
            message: "File updated!",
            entity: entity,
            filePath: newFilePath
        });
    
    } catch(err) {
        return res.status(500).json({
            message: "Updating a file failed!"
        });

    }
}


// const actualizarImagenCloudinary = async(req, res) => {

//     const { id, coleccion } = req.params;
//     let modelo;

//     switch (coleccion) {
//         case 'usuarios':
//             modelo = await Usuario.findById(id);
//             if (!modelo) {
//                 return res.status(400).json({
//                     msg: `No existe un usuario con el id ${ id }`
//                 });
//             }
//             break;
//         case 'productos':
//             modelo = await Producto.findById(id);
//             if (!modelo) {
//                 return res.status(400).json({
//                     msg: `No existe un producto con el id ${ id }`
//                 });
//             }
//             break;
//         default:
//             return res.status(500).json({ msg: 'Se me olvidó validar esto' });
//     }


//     // Limpiar imágenes previas
//     if (modelo.img) {
//         const nombreArr = modelo.img.split('/');
//         const nombre = nombreArr[nombreArr.length - 1];
//         const [public_id] = nombre.split('.');
//         cloudinary.uploader.destroy(public_id);
//     }

//     const { tempFilePath } = req.files.archivo
//     const { secure_url } = await cloudinary.uploader.upload(tempFilePath);
//     modelo.img = secure_url;
//     await modelo.save();
//     res.json(modelo);
// }

// const mostrarImagen = async(req, res) => {

//     const { id, coleccion } = req.params;
//     let modelo;

//     switch (coleccion) {
//         case 'usuarios':
//             modelo = await Usuario.findById(id);
//             if (!modelo) {
//                 return res.status(400).json({
//                     msg: `No existe un usuario con el id ${ id }`
//                 });
//             }
//             break;

//         case 'productos':
//             modelo = await Producto.findById(id);
//             if (!modelo) {
//                 return res.status(400).json({
//                     msg: `No existe un producto con el id ${ id }`
//                 });
//             }
//             break;

//         default:
//             return res.status(500).json({ msg: 'Se me olvidó validar esto' });
//     }

//     // Limpiar imágenes previas
//     if (modelo.img) {
//         // Hay que borrar la imagen del servidor
//         const pathImagen = path.join(__dirname, '../uploads', coleccion, modelo.img);
//         if (fs.existsSync(pathImagen)) {
//             return res.sendFile(pathImagen)
//         }
//     }

//     const pathImagen = path.join(__dirname, '../assets/no-image.jpg');
//     res.sendFile(pathImagen);
// }