import React, {useState} from "react";
import {FileUploader} from "react-drag-drop-files";
import uploadImage from "../../../../images/upload.png";
import ClearIcon from "@mui/icons-material/Clear";


export const UploadPhoto = () => {

    const [preview, setPreview] = useState<string[]>([])

    const getFile = (files: any) => {
        let photosForPreview = Object.keys(files).map((key) => {
            return URL.createObjectURL(files[key])
        })
        setPreview([...preview, ...photosForPreview])
        const formData = new FormData()
        Object.keys(files).forEach((key) => {
            formData.append('files', files[key])

        })
    }

    return (
        <>
            <div className='upload-block'>
                <FileUploader handleChange={getFile}
                              name="file"
                              multiple
                >
                    <div className="drag-area">
                        <div className="uploadImage">
                            <img src={uploadImage} alt=""/>
                        </div>
                        <header>Drag & Drop or click to Upload File</header>
                    </div>
                </FileUploader>
                <div className='preview-block'>
                    {preview.map((item, pos) =>
                        <div className='preview-image-card' key={pos} >
                            <div className='preview-image'>
                                <img src={item} alt=""/>
                            </div>
                            <div className='delete-icon'>
                                <ClearIcon/>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
