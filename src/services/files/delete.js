import { File } from '../../models';

export const deleteFileById = async({fileId}) => {
    File.findByIdAndDelete(fileId, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Deleted : ", docs);
        }
    });
}


