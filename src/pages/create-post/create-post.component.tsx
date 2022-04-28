import React, {useState} from 'react'
import './create-post.scss'
import {Button, FormControl, InputLabel, Select, TextField} from "@mui/material";
import {Controller, useForm} from 'react-hook-form';
import MenuItem from "@mui/material/MenuItem";
import {areas, ICities} from "../../common/areas-json/by-cities";
import {UploadPhoto} from "./components/upload-photo/upload-photo.component";
import {SelectColorComponent} from "./components/select-color/select-color.component";


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

interface IProps {
    finding:boolean
}

const CreatePostComponent = ({finding}:IProps) => {

    const [regionsArea, setRegionsArea] = useState<ICities[]>()
    const [petColor, setPetColor] = useState<string>()
    const {control, handleSubmit, register} = useForm()


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
                {finding && <TextField className="inputs-for-create-post"
                            id="outlined-basic"
                            label='Pet name'
                            variant="outlined"
                            {...register('pet-name')}
                />}
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
                    <SelectColorComponent petColor={petColor} setPetColor={setPetColor}/>
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
                <UploadPhoto/>
            </div>
            <Button className='create-post-button' variant='contained' color='primary' type='submit'>create</Button>
        </form>
    )
}

export default CreatePostComponent
