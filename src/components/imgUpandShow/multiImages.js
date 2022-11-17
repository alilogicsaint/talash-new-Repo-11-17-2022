
import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import '../imgUpandShow/style.css'


export const MultiImagesUpload = (props) => {
    
    const controlheight  = props.Cheight
    const controlwidth   = props.CWidth
    const placeholderImg = props.imgLink
    const bgSiz= props.objectFit == null?"cover":props.objectFit;

    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
     
    var images =[]     
    images.push(preview)
    // console.log(images)
    
    
    useEffect(() => {
      
        if (!selectedFile) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)
        


        // props.onSelectImagesGallery(objectUrl); //SEND CHILD DATA TO PARENT
        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
       
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined) 
            return
        } 
        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])   
       
    }
  

return (
       <>
        <div style={{width:controlwidth,height:controlheight}}>
            
            {preview != null?  
            selectedFile &&  <label 
            class="custom-file-upload"
            style={{
            display: "inline-block",
            width:"100%",
            height:"100%",
            cursor: "pointer",
            backgroundImage:`url(${process.env.PUBLIC_URL+ preview})`,
            backgroundRepeat: "no-repeat",
            objectFit:bgSiz,
            backgroundSize:bgSiz, 
            backgroundPosition:"center" 
            }} > 
            <input  type='file'  onChange={onSelectFile} style={{display:"none"}}/>
            </label> 
            
            :
            <label 
            class="custom-file-upload"
            style={{ 
            display: "inline-block",
            width:"100%",
            height:" 100%",
            cursor: "pointer",
            backgroundImage:`url(${process.env.PUBLIC_URL+ placeholderImg })`,
            backgroundRepeat: "no-repeat",
            objectFit:bgSiz,
            backgroundSize:bgSiz,
            backgroundPosition:"center" 
            }} > 
            <input  type='file'  onChange={onSelectFile} style={{display:"none"}}/>
            </label> }
            
        </div>
        
        </>
    )
}






            
