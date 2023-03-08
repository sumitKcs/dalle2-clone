import { useState, useEffect } from "react";


const useURLBuilder = (url:string, query: string, format:string ): string => {
    const [imgURL, setImgURL] = useState<string> ()

    useEffect(() => {

        let imgArray = url.split("/");
        imgArray.splice(6, 0, query);
        const getLastElement = imgArray[imgArray.length - 1];
        const getSecondLastElement = getLastElement.split(".")[0] + format;
        imgArray[imgArray.length - 1] = getSecondLastElement;
        let newUrl = imgArray.join("/");
        setImgURL(newUrl)

      
    }, [])
    

   

    return imgURL!
}

export default useURLBuilder
