import { GoogleMap, useLoadScript,  MarkerF } from '@react-google-maps/api';

const ContactMap = () => {
    const libraries = ['places'];
    const mapContainerStyle = {
        width: '100vw',
        height: '50vh',
    };
    const center = {
        lat: 25.329276968847758, // default latitude
        lng: 89.54147032806182, // default longitude
    };
    const options = {
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
    };
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: `${import.meta.env.VITE_GOOGLE_MAP_API}`,
        libraries,
    });

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    if (!isLoaded) {
        return <div>Loading maps</div>;
    }
    return (
        <div className='py-4'>
            <p className='text-center text-2xl font-semibold'>Our Location</p>
            <div className='overflow-hidden py-4'>
                <GoogleMap
                    options={options}
                    mapContainerStyle={mapContainerStyle}
                    zoom={10}
                    center={center}
                >
                    <MarkerF position={center} />
                    {/* <Marker onLoad={onLoad} position={center} /> */}
                </GoogleMap>
            </div>
        </div>
    );
};

export default ContactMap;