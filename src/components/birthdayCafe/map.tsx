import { useEffect } from "react";

declare global {
    interface Window {
        kakao: any;
    }
}

async function fetchBirthdayCafeInfo(x: number, y: number) {
    return {
        name: "생일카페 이름",
        address: "주소",
        link: "https://twitter/링크"
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
                    level: 12,
                    draggable: true,
                    disableDoubleClick: true,
                    disableZoom: true
                };

                const map = new window.kakao.maps.Map(mapContainer, mapOption);

                map.setZoomable(false);
                map.setDraggable(true);

                const markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);

                const marker = new window.kakao.maps.Marker({
                    map: map,
                    position: markerPosition,
                });
                
                marker.setMap(map);

                let infowindow: any = null; 

                window.kakao.maps.event.addListener(marker, 'click', async function() {
                    const info = await fetchBirthdayCafeInfo(markerPosition.getLat(), markerPosition.getLng());
                    const content = `
                        <div style="display: flex; flex-direction: column; background-color: white; padding: 10px; border: 1px solid #D9D9D9; border-radius: 5px; gap: 4px;">
                            <div style="color: black; font-size: 17px">${info.name}</div>
                            <div style="color: black; font-size: 13px">${info.address}</div>
                            <a href="${info.link}" style="color: #008890; text-decoration: none; font-size: 13px">https://twitter/링크</a>
                            <div>
                                <button style="width: 55px; height: 25px; border-radius: 7px; cursor: pointer; background-color: #F96C85; color: white; border: none; margin-right: 4px;">수락</button>
                                <button style="width: 55px; height: 25px; cursor: pointer; background-color: white; border: 1px solid #F96C85; color: #F96C85; border-radius: 7px">거절</button>
                            </div>
                        </div>
                    `

                    if (infowindow) {
                        infowindow.close();
                    }

                    infowindow = new window.kakao.maps.InfoWindow({
                        content: content,
                        removable: true
                    })
                    
                    infowindow.open(map, marker);
                });
            });
        };

        mapScript.addEventListener("load", onLoadKakaoMap);

        return () => mapScript.removeEventListener("load", onLoadKakaoMap);
    }, []);

    return (
        <div id="map" style={{ width: "2000px", height: "840px" }}></div>
    )
}

export default Map;
