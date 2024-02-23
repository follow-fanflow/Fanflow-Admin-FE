import { useEffect } from "react";

declare global {
    interface Window {
        kakao: any;
    }
}

function Map() {
    useEffect(() => {
        const mapScript = document.createElement("script");
        mapScript.async = true;
        mapScript.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=67d0286911f77cf3ceabfd3161f18840&autoload=false&libraries=services,clusterer,drawing';
        document.head.appendChild(mapScript);

        const onLoadKakaoMap = () => {
            window.kakao.maps.load(() => {
                const mapContainer = document.getElementById('map');
                const mapOption = {
                    center: new window.kakao.maps.LatLng(35.9078, 127.7669),
                    level: 13,
                    draggable: false,
                    disableDoubleClick: true,
                    disableZoom: true
                };

                const map = new window.kakao.maps.Map(mapContainer, mapOption);
                const markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);

                const marker = new window.kakao.maps.Marker({
                    map: map,
                    position: markerPosition,
                });

                marker.setMap(map);

                let infowindow: any = null; 

                window.kakao.maps.event.addListener(marker, 'click', function() {
                    infowindow = new window.kakao.maps.InfoWindow({
                        content: 'Hello, World!', 
                        removable: true
                    });

                    infowindow.open(map, marker); 
                });
            });
        };

        mapScript.addEventListener("load", onLoadKakaoMap);

        return () => mapScript.removeEventListener("load", onLoadKakaoMap);
    }, []);

    return (
        <div id="map" style={{ width: "1400px", height: "840px" }}></div>
    )
}

export default Map;
