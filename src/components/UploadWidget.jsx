import React from 'react'

const UploadWidget = ({ mediaArray,buttonText }) => {
    const cloudinaryRef = React.useRef();
    const widgetRef = React.useRef();
    React.useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget(
        {
            cloudName: "da2lno6lq",
            uploadPreset: "qgaobizj",
        },
            function (error, result) {
                result.info.files?.map((file) => { 
                    console.log(photosArray)
                    mediaArray.push({
                        asset_id: file?.uploadInfo?.asset_id,
                        folder: file?.uploadInfo?.folder,
                        public_id: file?.uploadInfo?.public_id,
                        secure_url: file?.uploadInfo?.secure_url,
                    })
                }
                );

        }
        );
    }, []);
    return (
        <button
        className={styles.uploadButton}
        onClick={() => widgetRef.current.open()}
        >
        {buttonText}
        </button>
    );
};

const styles = {
    uploadButton:"bg-gradient-to-br from-[#EC4899] via-[#D946EF] to-[#14B8A6] text-white font-semibold uppercase leading-lg rounded-lg px-3 py-1"
}

export default UploadWidget