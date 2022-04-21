import React, {useState} from 'react'
import {FileUploader} from "react-drag-drop-files";
import uploadImage from '../../images/upload.png'
import './create-post.scss'
import ClearIcon from '@mui/icons-material/Clear';
import {Button, Checkbox, FormControl, FormControlLabel, InputLabel, Select, TextField} from "@mui/material";
import {Controller, useForm} from 'react-hook-form';
import MenuItem from "@mui/material/MenuItem";
import {areas, ICities} from "../../common/areas-json/by-cities";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const CreatePostComponent = () => {

    const [preview, setPreview] = useState<string[]>([])
    const [regionsArea, setRegionsArea] = useState<ICities[]>()
    const [checked, setChecked] = useState(true)
    const {control, handleSubmit, register, watch} = useForm()
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

    const selectArea = (selected: any) => {
        setRegionsArea(selected?.cities)
    }

    const createNewPost = (data: any) => {
        console.log(data)
    }

    return (
        <form className='add-post-content' onSubmit={handleSubmit(createNewPost)}>
            <div className='enter-info-block'>
                <p>Create Post</p>
                <h5>Post title</h5>
                <TextField className="inputs-for-create-post"
                           id="outlined-basic"
                           variant="outlined"
                           {...register('title')}
                />
                <p>Contact information</p>
                <div className='contact-information'>
                    <div>
                        <h5>Name</h5>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            className='inputs-for-create-post'
                            {...register('phone')}
                        />
                    </div>
                    <div>
                        <h5>Phone number</h5>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            type='number'
                            className='inputs-for-create-post'
                            InputLabelProps={{shrink: true}}
                            {...register('phone')}
                        />
                    </div>
                </div>
            </div>
            <div className='enter-info-block'>
                <p>About Pet</p>
                <div className='pet-info'>
                    <FormControl className='info-pet inputs-for-create-post'>
                        <InputLabel variant='outlined'>Type</InputLabel>
                        <Controller
                            render={
                                ({field}) =>
                                    <Select
                                        {...field}
                                        label='Type'
                                        variant='outlined'
                                        MenuProps={MenuProps}
                                    >
                                        <MenuItem value={'Cat'}>Cat</MenuItem>
                                        <MenuItem value={'Dog'}>Dog</MenuItem>
                                    </Select>
                            }
                            control={control}
                            name="type"
                        />
                    </FormControl>
                    <FormControl className='info-pet inputs-for-create-post'>
                        <InputLabel variant='outlined'>Gender</InputLabel>
                        <Controller
                            render={
                                ({field}) =>
                                    <Select
                                        {...field}
                                        className='select-region'
                                        label='Gender'
                                        variant='outlined'
                                        MenuProps={MenuProps}
                                    >
                                        <MenuItem value={'Male'}>Male</MenuItem>
                                        <MenuItem value={'Female'}>Female</MenuItem>
                                    </Select>
                            }
                            control={control}
                            name="gender"
                        />
                    </FormControl>
                </div>
                <div className='pet-color'>
                    <p>Color</p>
                    <input type="color"
                           defaultValue="#e66465"
                           {...register('color')}
                    />
                </div>
            </div>
            <div className='enter-info-block'>
                <p>Location</p>
                <div className='location-content'>
                    <FormControl className='inputs-for-create-post' fullWidth>
                        <InputLabel variant='outlined'>Area</InputLabel>
                        <Controller
                            render={
                                ({field}) =>
                                    <Select
                                        {...field}
                                        label='Area'
                                        variant='outlined'
                                        MenuProps={MenuProps}
                                    >
                                        {areas.map((item: any) => <MenuItem key={item.name}
                                                                            onClick={() => selectArea(item)}
                                                                            value={item.name}>{item.name}</MenuItem>)}
                                    </Select>
                            }
                            control={control}
                            name="area"
                        />
                    </FormControl>
                    <FormControl className='inputs-for-create-post'
                                 fullWidth
                                 disabled={!regionsArea}
                    >
                        <InputLabel variant='outlined'>Region</InputLabel>
                        <Controller
                            render={
                                ({field}) =>
                                    <Select
                                        {...field}
                                        className='select-region'
                                        label='Region'
                                        variant='outlined'
                                        MenuProps={MenuProps}
                                    >
                                        {regionsArea?.map((item: any) => <MenuItem key={item.name}
                                                                                   value={item.name}>{item.name}</MenuItem>)}
                                    </Select>
                            }
                            control={control}
                            name="region"
                        />
                    </FormControl>
                </div>
                <TextField className="inputs-for-create-post"
                           id="outlined-basic"
                           label="Enter address"
                           variant="outlined"
                           disabled={!regionsArea}
                           {...register('address')}
                />
            </div>
            <div className='enter-info-block'>
                <p>Description</p>
                <TextField className="inputs-for-create-post"
                           multiline
                           rows={7}
                           {...register('description')}
                />
            </div>
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
                        <div className='preview-image-card'>
                            <div className='preview-image'>
                                <img src={item} key={pos} alt=""/>
                            </div>
                            <div className='delete-icon'>
                                <ClearIcon/>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Button variant='contained' color='primary' type='submit'
            >create</Button>
        </form>
    )
}

export default CreatePostComponent
