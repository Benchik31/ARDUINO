import React from "react";
//import api from '../utils/api.js'

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Maps(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const defaultState = {
    center: [props.w, props.h],
    zoom: 17,
  };
  //console.log(currentUser)

  return (
    <section className="map">
      <div className="map__body">
        <YMaps>
          <Map defaultState={defaultState} width={1000} height={600}>
            <Placemark geometry={[props.w, props.h]} />
          </Map>
        </YMaps>
      </div>
    </section>
  );
}

export default Maps;
