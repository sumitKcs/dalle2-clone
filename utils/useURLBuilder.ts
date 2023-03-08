import { useState, useEffect } from "react";


const useURLBuilder = (url:string, query: string, format:string ): string => {
    const [imgURL, setImgURL] = useState<string> ()
    console.log("useURLBuilder called")

    useEffect(() => {
        console.log("useURLBuilder Useeffect called")
      
        let imgArray = url.split("/");
        imgArray.splice(6, 0, "q_70,w_400");
        const getLastElement = imgArray[imgArray.length - 1];
        const getSecondLastElement = getLastElement.split(".")[0] + ".avif";
        imgArray[imgArray.length - 1] = getSecondLastElement;
        let newUrl = imgArray.join("/");
        setImgURL(newUrl)

      
    }, [])
    

   

    return imgURL!
}

export default useURLBuilder
