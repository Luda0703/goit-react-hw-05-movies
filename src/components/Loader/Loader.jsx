import { Circles } from  'react-loader-spinner'

export const Loader = () => {
    return (
        <>
        <Circles
            height="80"
            width="80"
            color="#191970"
            ariaLabel="circles-loading"
            wrapperStyle={{
                position: 'absolute',
                top: '50%',
                left: ' 50%',
                transform: 'translate(-50%, -50%)',
            }}
            wrapperClass=""
            visible={true}
        />
        </>
    )
}