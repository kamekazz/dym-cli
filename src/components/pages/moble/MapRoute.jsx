import React, { Component } from 'react'

import { connect } from 'react-redux'


const burro ='https://res.cloudinary.com/dujqdfwzi/image/upload/c_scale,w_50/v1551318837/wfl/dly/9c2f40c841ba3ae0139f965dd40c4763.png'
const customer='https://res.cloudinary.com/dujqdfwzi/image/upload/c_scale,w_30/v1551321020/wfl/dly/customer.png'

const APIKEY = 'AIzaSyB-KvHwje-26U3OVTWgf1H_vKD7BLmQsW4'

class MapRoute extends Component {




    state = {
        location: 
        [
          {contentString:'Molly MORGAN',lat:40.749618,lng:-73.987605,icon:customer,info:'morgan'},
          {contentString:'ME',lat:40.749618,lng:-73.984605,icon:burro,info:'ME'},
        ]
      }
      
        componentDidMount() {
          this.getLocation()
        }
      
        renderMap = () => {
          loadScript(`https://maps.googleapis.com/maps/api/js?key=${APIKEY}&callback=initMap&libraries=places`)
          window.initMap = this.initMap
        }
      
        getLocation = () => {
          this.renderMap()
        }
      
        initMap = () => {
            let {lat,lng} = this.state.location[0]
          // Create A Map
          var map = new window.google.maps.Map(document.getElementById('map2'), {
            center: {lat:lat, lng:lng},
            zoom: 14
          })
      
          // Create An InfoWindow
          var infoWindow = new window.google.maps.InfoWindow()
          
  
          // Display Dynamic Markers
          this.state.location.map(myVenue => {
      
               // Create A Marker
            let marker = new window.google.maps.Marker({
              position: {lat: myVenue.lat , lng:  myVenue.lng},
              map: map,
              title: myVenue.contentString,
              icon: myVenue.icon
  
            })
      
  
            if (myVenue.contentString === 'winfieldflynn') {
              infoWindow.setContent(myVenue.contentString)
              infoWindow.open(map, marker)
            } else{
              marker.addListener('click', function() {
              // Change the content
              infoWindow.setContent(myVenue.info)
      
              // Open An InfoWindow
              infoWindow.open(map, marker)
            })
            }
        
          })
      
          
      
        }
      
        render() {
          return (
            <main>
              <div id="map2"></div>  
            </main>
          )
        }
      }
      
      function loadScript(url) {
        var index  = window.document.getElementsByTagName("script")[0]
        var script = window.document.createElement("script")
        script.src = url
        script.async = true
        script.defer = true
        index.parentNode.insertBefore(script, index)
      }

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(MapRoute)
