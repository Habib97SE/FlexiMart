"client side"
import React, { useEffect, useRef } from "react";
import { Editor } from '@tinymce/tinymce-react';
import BrandModel from "@/models/product/BrandModel";

const TextEditor = () => {

    const brandModel = new BrandModel();

    useEffect(() => {
        const getBrands = async () => {
            const brands = await brandModel.getBrands();
            console.log(brands);
        };
        getBrands();
    }, []);
    
    return (
        <Editor
            apiKey="tkg3rwz1ge3xzpr1f7sm15oq6piiy18zo7cmotlvp7ju6gil"
            initialValue="<p>This is the initial content of the editor</p>"
            init={{
                height: 500,
                menubar: true,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                ],
                toolbar:
                    'undo redo | formatselect | bold italic backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | help'
            }}
        />
    );
};

export default TextEditor;  