import React, { useEffect, useState } from "react";

declare global {
    interface Window {
        kakao: any;
    }
}

interface Cafe {
    id: number;
    placeX: number;
    placeY: number;
    name: string;
    link: string;
}

async function fetchBirthdayCafeInfo(id: number): Promise<{ name: string, address: string, link: string } | null> {
    try {
        const response = await fetch(`/place/admin/${id}`, {
            method: 'GET'
        });
        if (!response.ok) {
            throw new Error('카페 정보 가져오기 실패');
        }
        const cafeInfo = await response.json();
        return {
            name: cafeInfo.name,
            address: cafeInfo.address,
            link: cafeInfo.link
        };
    } catch (error) {
        console.error("카페 정보 가져오는 중 에러: ", error);
        return null;
    }
}

function Map(): JSX.Element {
    const [cafes, setCafes] = useState<Cafe[]>([]);

    useEffect(() => {
        const mapScript: HTMLScriptElement = document.createElement("script");
        mapScript.async = true;
        mapScript.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=d132a783f04f722c629df051c361dfa8&autoload=false&libraries=services,clusterer,drawing';
        document.head.appendChild(mapScript);

        const onLoadKakaoMap = () => {
            window.kakao.maps.load(() => {
                const mapContainer: HTMLElement | null = document.getElementById('map');
                if (!mapContainer) return;
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

                cafes.forEach(async (cafe) => {
                    const markerPosition = new window.kakao.maps.LatLng(cafe.placeX, cafe.placeY);

                    const marker = new window.kakao.maps.Marker({
                        map: map,
                        position: markerPosition,
                    });

                    window.kakao.maps.event.addListener(marker, 'click', async function () {
                        const geocoder = new window.kakao.maps.services.Geocoder();
                        geocoder.coord2Address(markerPosition.getLng(), markerPosition.getLat(), (result: any, status: any) => {
                            if (status === window.kakao.maps.services.Status.OK) {
                                const address = result[0].address.address_name;

                                const content = `
                                    <div style="display: flex; flex-direction: column; background-color: white; padding: 10px; border: 1px solid #D9D9D9; border-radius: 5px; gap: 4px;">
                                        <div style="color: black; font-size: 17px">${cafe.name}</div>
                                        <div style="color: black; font-size: 13px">${address}</div>
                                        <a href="${cafe.link}" style="color: #008890; text-decoration: none; font-size: 13px">${cafe.link}</a>
                                        <div>
                                            <button style="width: 55px; height: 25px; border-radius: 7px; cursor: pointer; background-color: #F96C85; color: white; border: none; margin-right: 4px;">수락</button>
                                            <button style="width: 55px; height: 25px; cursor: pointer; background-color: white; border: 1px solid #F96C85; color: #F96C85; border-radius: 7px">거절</button>
                                        </div>
                                    </div>
                                `;

                                const infowindow = new window.kakao.maps.InfoWindow({
                                    content: content,
                                    removable: true
                                });

                                infowindow.open(map, marker);
                            } else {
                                console.error('주소 변환 실패: ', status);
                            }
                        });
                    });
                });
            });
        };

        mapScript.addEventListener("load", onLoadKakaoMap);

        return () => mapScript.removeEventListener("load", onLoadKakaoMap);
    }, [cafes]);

    return (
        <div id="map" style={{ width: "2000px", height: "840px" }}></div>
    );
}

export default Map;
