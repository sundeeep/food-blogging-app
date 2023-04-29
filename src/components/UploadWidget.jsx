import React from 'react'

const UploadWidget = () => {
    const cloudinaryRef = React.useRef();
    const widgetRef = React.useRef();
    React.useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: "da2lno6lq",
            uploadPreset: "qgaobizj",
        }, function (error, result) {
            console.log(result.info.files)
        })
    },[])
    return <button className={styles.uploadButton}
        onClick={() => widgetRef.current.open()}>
        Select Images
    </button>;
}

const styles = {
    uploadButton:"bg-gradient-to-br from-[#EC4899] via-[#D946EF] to-[#14B8A6] text-white font-semibold uppercase leading-lg rounded-lg px-3 py-1"
}

export default UploadWidget